import program from 'commander'

program
  .command('dev')
  .alias('d')
  .description('Create development build')

  .action((name, id) => {
    console.log(name, id)
  })
