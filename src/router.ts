import fetch from 'node-fetch';

const OLLAMA_URL = 'http://192.168.68.61:11434';
const SPIKE_MODEL = 'phi4-mini';

export type Agent = 'ED' | 'FAYE' | 'BOTH';

export async function route(userInput: string): Promise<Agent> {
  const prompt = `You are a routing system. Classify the following user message into exactly one of these categories:
  
  ED - technical questions, code, linux, sysadmin, hacking, research, hardware
  FAYE - conversation, roleplay, creative writing, general chat, opinions
  BOTH - requires both technical knowledge AND social/conversational response

  Reply with ONLY the single word: ED, FAYE, or BOTH. Nothing else.

  User message: "${userInput}"`;

  const response = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: SPIKE_MODEL,
      prompt,
      stream: false
    })
  });

  const data = await response.json() as { response: string };
  const decision = data.response.trim().toUpperCase();

  if (decision === 'ED' || decision === 'FAYE' || decision === 'BOTH') {
    return decision;
  }

  console.warn(`SPIKE returned unexpected value: "${decision}", defaulting to FAYE`);
  return 'FAYE';
}