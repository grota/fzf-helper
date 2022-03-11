#!/usr/bin/env node
import { split } from 'shellwords'
import getopts from 'getopts'
import Table from 'cli-table3'
import colors from 'colors'

const sp = split(process.env.FZF_DEFAULT_OPTS);
const options = getopts(sp);

if (!options.bind) {
  console.log('no fzf bind options')
  process.exit(0)
}
const columns : number = <number>(<unknown>process.env.FZF_PREVIEW_COLUMNS);
const table = new Table({
  head: [colors.green('Command'), colors.green('Key')],
  wordWrap:true,
  colWidths: [columns -24, 18],
});
const data: { [key: string]: string[] } = {};

if ((typeof options.bind) == 'string') {
  options.bind = [options.bind]
}
options.bind.forEach((bindOpts: string) => {
  // Each --bind can have a comma separated list of key:action expressions.
  bindOpts.split(',').forEach((bindOpt: string) => {
    // : can appear in the rhs.
    const [key, ...rest] = bindOpt.split(':');
    const action = rest.join(':');
    if (!data[action]) {
      data[action] = [];
    }
    data[action].push(key);
  });
});

for (const action in data) {
  table.push([action, data[action].join(',')]);
}
console.log(table.toString());
