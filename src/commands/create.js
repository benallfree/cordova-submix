import program from 'commander'
import path from 'path'
import findUp from 'find-up'
import fs from 'fs'
import editJsonFile from 'edit-json-file'
import _ from 'lodash'
import { ex } from '../utils'

const deps = ['benallfree/cordova-submix']
program
  .command('create <dir> <id> <name> [ios|android]')
  .alias('n')
  .description('Create a new Submix project')

  .action(async (dir, id, name, platform = 'ios') => {
    const submixRoot = path.dirname(
      await findUp('package.json', { cwd: __dirname }),
    )

    const saved = process.cwd()
    const dst = path.resolve(saved, dir)
    try {
      // if (fs.existsSync(dst)) {
      //   throw new Error(`Path ${dst} exists, aborting`)
      // }
      // await ex(`cordova create "${dir}" "${id}" "${name}"`, {
      //   text: 'Creating fresh Cordova project',
      // })
      process.chdir(dst)
      // await ex(`cordova platform add ${platform}`, {
      //   text: `Adding platform: ${platform}`,
      // })
      // await ex(`npm i ${deps.join(' ')}`, {
      //   text: 'Installing npm dependencies',
      // })

      // const file = editJsonFile(path.resolve(dst, 'package.json'))
      // file.set('scripts.dev', 'submix dev')
      // file.set('scripts.hot', 'submix hot')
      // file.set('scripts.prod', 'submix prod')
      // file.set('scripts.watch', 'submix watch')
      // file.save()

      await ex(`rm -rf www`, { text: 'Clearing build directory' })
      await ex(`cp -r ${path.resolve(submixRoot, 'templates/src')} .`, {
        text: 'Installing boilerplate app source',
      })
      await ex(
        `cp -r ${path.resolve(submixRoot, 'templates/webpack.mix.js')} .`,
        { text: 'Installing webpack configuration' },
      )
      await ex(`cp -r ${path.resolve(submixRoot, 'templates/build.json')} .`, {
        text: 'Installing platform build configuration',
      })
      // await ex('npm run dev', {
      //   text: 'Building initial version',
      // })
      // await ex(`cordova emulate ${platform}`, {
      //   text: 'Building and launching simulator',
      // })
    } catch (e) {
      console.error(e.message)
    } finally {
      process.chdir(saved)
    }
  })
