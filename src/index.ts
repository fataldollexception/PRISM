import * as readline from 'readline';
import { route, Agent } from './router';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise(resolve => rl.question(question, resolve));
}

async function main() {
  console.log('');
  console.log('██████╗ ██████╗ ██╗███████╗███╗   ███╗');
  console.log('██╔══██╗██╔══██╗██║██╔════╝████╗ ████║');
  console.log('██████╔╝██████╔╝██║███████╗██╔████╔██║');
  console.log('██╔═══╝ ██╔══██╗██║╚════██║██║╚██╔╝██║');
  console.log('██║     ██║  ██║██║███████║██║ ╚═╝ ██║');
  console.log('╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝╚═╝     ╚═╝');
  console.log('');
  console.log('P.R.I.S.M — Parallel Routing Intelligence with Specialist Models');
  console.log('SPIKE online. Awaiting input...');
  console.log('');

  while (true) {
    const input = await ask('> ');

    if (input.toLowerCase() === 'exit') {
      console.log('PRISM signing off. See you, space cowboy.');
      rl.close();
      break;
    }

    console.log('SPIKE: routing...');
    const agent: Agent = await route(input);
    console.log(`SPIKE: dispatching to ${agent}`);
    console.log('');
  }
}

main().catch(console.error);