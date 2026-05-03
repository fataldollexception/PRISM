# P.R.I.S.M
**Parallel Routing Intelligence with Specialist Models**

Local open-source multi-agent AI system with VTube avatar interface.
Sci-fi anime aesthetic — Cowboy Bebop / Outlaw Star inspired.

## The Crew
- **SPIKE** — orchestrator, routes intent to the right agent, runs phi4-mini
- **ED** — technical agent, code/sysadmin/hacking/research, runs qwen2.5-coder:14b
- **FAYE** — social agent, conversation/personality/creativity, runs llama3.1:8b
- **JET** — both agents collaborate, used when a response needs technical AND social handling

## Stack
- Inference: Ollama on Gamestation5 (192.168.68.61:11434)
- App shell: Tauri v2 (Rust + Svelte) — not yet implemented
- Orchestration: Node.js/TypeScript — in progress
- Avatar: VTube Studio WebSocket API — not yet implemented
- TTS: Kokoro — not yet implemented

## Current State
- CLI prototype running via `npx ts-node src/index.ts`
- SPIKE router implemented in `src/router.ts`
- ED and FAYE response logic not yet written

## Next Steps
- Wire ED and FAYE agents to Ollama
- Test full routing loop with Gamestation5 online
- Add streaming responses

## Dev Machine
Windows 10, VS Code, Node v24.15.0

## Runtime Machine
Gamestation5 — Fedora KDE, RTX 4070 Ti, 62GB RAM