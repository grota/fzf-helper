import { split } from 'shellwords'
import getopts from 'getopts'

const toparse = process.env.FZF_DEFAULT_OPTS;
const sp = split(toparse);

const options = getopts(sp);
if (options.bind) {
  console.log(options.bind);
} else {
  console.log('no fzf bind options')
}
