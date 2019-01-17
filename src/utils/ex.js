import ora from 'ora'
import util from 'util'
import _ from 'lodash'

const exec = util.promisify(require('child_process').exec)

async function ex(cmd, opts = {}) {
  const { cwd, text } = _.defaults({}, opts)
  const spinner = ora().start(text || cmd)
  try {
    const { stdout, stderr } = await exec(cmd, { cwd })
    spinner.succeed()
  } catch (e) {
    spinner.fail(e.getMessage())
  }
}

export { ex }
