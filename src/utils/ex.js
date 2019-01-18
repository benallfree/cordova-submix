import ora from 'ora'
import { spawn } from 'child_process'
import { parse } from 'shell-quote'
import _ from 'lodash'

async function ex(cmdStr, opts = {}) {
  const { text, ...rest } = _.defaults({ env: { ...process.env } }, opts)
  let spinner = null
  if (text) spinner = ora().start(text)
  const parsed = parse(cmdStr)
  const cmd = parsed.shift()
  const args = [...parsed]
  const stderr = []
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { ...rest })
    child.on('exit', (code, signal) => {
      if (code !== 0) {
        if (text) spinner.fail()
        console.error(stderr.join(''))
        throw new Error(`Command failed: ${cmdStr}`)
        reject()
      }
      if (text) spinner.succeed()
      resolve()
    })
    // child.stdout.on('data', data => {
    //   console.log(data)
    // })
    child.stderr.on('data', data => {
      stderr.push(data)
    })
    if (!text) child.stdout.pipe(process.stdout)
    if (!text) child.stderr.pipe(process.stderr)
  })
}

// async function ex(cmd, opts = {}) {
//   const { text, ...rest } = _.defaults({}, opts)
//   const spinner = ora().start(text || cmd)
//   return new Promise((resolve, reject) => {
//     exec(cmd, { maxBuffer: 1024 * 1024, ...rest }, (err, stdout, stderr) => {
//       if (err) {
//         spinner.fail()
//         console.error(`Command : ${cmd}`)
//         console.error(err.message)
//         reject()
//         return
//       }
//       spinner.succeed()
//       resolve()
//     })
//   })
// }

export { ex }
