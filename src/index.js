#!/usr/bin/env node
import program from 'commander'
import './commands'
import p from './../package.json'

program.version(p.version)

program.on('command:*', function() {
  console.error(
    'Invalid command: %s\nSee --help for a list of available commands.',
    process.argv.slice(2).join(' '),
  )
  process.exit(1)
})

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
