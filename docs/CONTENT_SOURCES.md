# Subject content sources

Teaching content must come from the supplied recordings and completed machine transcripts. Each subject manifest maps its ID to a folder under `K:\Gate\GO CSE`; `data/source-files.json` records recursive recording discovery, including nested `Done` folders. Supporting PDFs remain separate and are not inputs to lesson authoring.

Each subject's `data/source-analysis/inventory.json` establishes stable lecture IDs and measured durations. Raw timestamped text is preserved in `data/source-analysis/transcripts/*.jsonl`; a `.done` marker permits import into numbered `data/transcripts/<id>.json`. Source passages and timestamps are kept as evidence alongside original teaching exercises.

COA's 35 and Digital Logic's 98 completed transcripts and existing lessons were preserved during restructuring. The other nine subjects have measured inventories and scaffolds; their transcripts and teaching have not been created yet. See [adding subjects](ADDING_SUBJECTS.md) for the transcription and publication workflow.

ASR can mishear formulas, numbers, and terminology. Verify arithmetic and state transitions when constructing original examples, and state every necessary width, polarity, initial state, timing model, or other assumption explicitly. Audio cannot recover an unspoken board diagram; do not invent such details as quotations from a recording. Topic matches identify transcript passages, not a guarantee of verbatim accuracy.

Questions teach the subject directly. Worked examples supply all inputs on the front and a complete solution on the back. The portal uses teaching steps, puzzles, and practice errors; it has no video player or lecture notebook.
