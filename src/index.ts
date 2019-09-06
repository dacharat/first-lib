#!/usr/bin/env node
import program from 'commander'
import inquirer from 'inquirer'

export function add(number1: number, number2: number) {
  return number1 + number2
}

program.version('1.0.0')

program
  .command('love <thing>')
  .option('-i, --I')
  .option('-h, --hate <thing>')
  .action((thing, option) => {
    console.log('I love ', thing)
    if (option.I) {
      console.log('I hate ', option.hate)
    }
  })

program.command('ask').action(async () => {
  const answers = await inquirer.prompt([
    {
      choices: ['React', 'Vue', 'Angular'],
      message: 'What is the best framwork in the world?',
      name: 'framework',
      type: 'list',
    },
  ])
  if (answers.framework === 'React') {
    console.log('Yes you are 10x Engineer')
  } else {
    console.log('Fuck you monkey')
  }
})

program.parse(process.argv)
