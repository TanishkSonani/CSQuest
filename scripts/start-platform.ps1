$ErrorActionPreference='Stop'
$platformRoot=Split-Path -Parent $PSScriptRoot
$node=(Get-Command node -ErrorAction Stop).Source
$runtime=Join-Path $platformRoot 'runtime'
New-Item -ItemType Directory -Path $runtime -Force | Out-Null
& $node "$PSScriptRoot\sync.mjs"
if ($LASTEXITCODE -ne 0) { throw 'Unable to sync course data.' }
$watcher=$null
$lock=Join-Path $runtime 'watcher.json'
if (Test-Path -LiteralPath $lock) {
  $info=Get-Content -LiteralPath $lock -Raw | ConvertFrom-Json
  $watcher=Get-CimInstance Win32_Process -Filter "ProcessId=$($info.pid)" -ErrorAction SilentlyContinue
  if ($watcher -and ($watcher.Name -ne 'node.exe' -or $watcher.CommandLine -notlike "*$platformRoot*" -or $watcher.CommandLine -notmatch 'scripts[\\/]watch\.mjs')) { $watcher=$null }
}
if (!$watcher) {
  $watcher=Start-Process -FilePath $node -ArgumentList @("`"$PSScriptRoot\watch.mjs`"") -WorkingDirectory $platformRoot -WindowStyle Hidden -RedirectStandardOutput "$runtime\watcher-output.log" -RedirectStandardError "$runtime\watcher-error.log" -PassThru
}
$watcherId=if ($watcher.Id) { $watcher.Id } else { $watcher.ProcessId }
$server=$null
$servicesFile=Join-Path $runtime 'services.json'
if (Test-Path -LiteralPath $servicesFile) {
  $info=Get-Content -LiteralPath $servicesFile -Raw | ConvertFrom-Json
  $server=Get-CimInstance Win32_Process -Filter "ProcessId=$($info.server)" -ErrorAction SilentlyContinue
  if ($server -and ($server.Name -ne 'node.exe' -or $server.CommandLine -notlike "*$platformRoot*" -or $server.CommandLine -notmatch 'scripts[\\/]server\.mjs')) { $server=$null }
}
if (!$server) {
  $server=Start-Process -FilePath $node -ArgumentList @("`"$PSScriptRoot\server.mjs`"") -WorkingDirectory $platformRoot -WindowStyle Hidden -RedirectStandardOutput "$runtime\server-output.log" -RedirectStandardError "$runtime\server-error.log" -PassThru
}
$serverId=if ($server.Id) { $server.Id } else { $server.ProcessId }
@{server=$serverId;watcher=$watcherId;started=(Get-Date).ToString('o')} | ConvertTo-Json | Set-Content -LiteralPath $servicesFile -Encoding UTF8
Write-Output 'CS Quest is running at http://localhost:4173 (this PC only).'
Write-Output 'One shared watcher checks every registered subject once per minute.'
