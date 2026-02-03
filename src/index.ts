#!/usr/bin/env node
import {readFileSync} from 'fs';
import {join, dirname} from 'path';
import {fileURLToPath} from 'url';

import {Command} from 'commander';
import {fetchCommand} from './commands/fetch.js';
import {initCommand} from './commands/init.js';
import {addCommand} from './commands/add.js';
import {testCommand} from './commands/test.js';
import {syncCommand} from './commands/sync.js';
import {fixCommand} from './commands/fix.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const packageJsonPath = join(__dirname, '../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));

const program = new Command();

program
  .name('leetkick')
  .description('CLI tool for scaffolding LeetCode exercises')
  .version(packageJson.version);

program.addCommand(fetchCommand);
program.addCommand(initCommand);
program.addCommand(addCommand);
program.addCommand(testCommand);
program.addCommand(syncCommand);
program.addCommand(fixCommand);

program.parse();
