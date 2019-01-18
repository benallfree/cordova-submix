import ora from 'ora'
import { exec } from 'child_process'
import _ from 'lodash'

async function ex(cmd, opts = {}) {
  const { text, ...rest } = _.defaults({}, opts)
  const spinner = ora().start(text || cmd)
  return new Promise((resolve, reject) => {
    exec(cmd, { maxBuffer: 1024 * 1024, ...rest }, (err, stdout, stderr) => {
      if (err) {
        spinner.fail()
        console.error(`Command : ${cmd}`)
        console.error(err.message)
        reject()
        return
      }
      spinner.succeed()
      resolve()
    })
  })
}

export { ex }
