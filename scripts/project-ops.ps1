param([ValidateSet('Sync','Start','Stop','Test','Status','QA','Diagnose','Catalog')][string]$Action='Status')
$ErrorActionPreference='Stop'
$project=Split-Path -Parent $PSScriptRoot
Push-Location $project
try {
  switch ($Action) {
    'Start' { & "$PSScriptRoot\start-platform.ps1" }
    'Sync' { & node scripts/sync.mjs; if ($LASTEXITCODE -ne 0) { throw 'Sync failed.' } }
    'Catalog' { & node scripts/catalog.mjs; if ($LASTEXITCODE -ne 0) { throw 'Catalog scan failed.' } }
    'Test' { & npm.cmd test; if ($LASTEXITCODE -ne 0) { throw 'Tests failed.' } }
    'QA' { & node tests/browser.cjs; if ($LASTEXITCODE -ne 0) { throw 'Browser checks failed.' } }
    'Diagnose' { & node tests/diagnose.cjs; if ($LASTEXITCODE -ne 0) { throw 'Diagnostics failed.' } }
    'Status' {
      foreach ($course in Get-ChildItem -LiteralPath "$project\courses" -Directory) {
        $statusFile=Join-Path $project ("runtime\courses\$($course.Name)\progress.json")
        if (Test-Path -LiteralPath $statusFile) { Get-Content -LiteralPath $statusFile -Raw }
      }
    }
    'Stop' {
      $serviceFile=Join-Path $project 'runtime\services.json'
      if (Test-Path -LiteralPath $serviceFile) {
        $services=Get-Content -LiteralPath $serviceFile -Raw | ConvertFrom-Json
        foreach ($serviceId in (@($services.server,$services.watcher) | Where-Object { $_ } | Select-Object -Unique)) {
          $owned=Get-CimInstance Win32_Process -Filter "ProcessId=$serviceId" -ErrorAction SilentlyContinue
          if ($owned -and $owned.Name -eq 'node.exe' -and $owned.CommandLine -like "*$project*" -and $owned.CommandLine -match 'scripts[\\/](server|watch)\.mjs') { Stop-Process -Id $serviceId -ErrorAction Stop }
        }
      }
    }
  }
} finally { Pop-Location }
