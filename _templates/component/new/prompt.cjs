module.exports = {
  prompt: ({ inquirer, args }) => {
    const questions = [
      {
        type: 'select',
        name: 'category',
        message: 'AWhich Atomic Design category? ',
        choices: ['atoms', 'molecules', 'organisms', 'templates']
      },
      {
        type: 'input',
        name: 'component_name',
        message: 'What is the name of component? '
      },
      {
        type: 'input',
        name: 'dir',
        message: 'Please select the directory within src/components/${category}.',
      },
    ]
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, component_name, dir } = answers
        const path = `${category}/${ dir ? `${dir}/` : `` }${component_name}`
        const abs_path = `src/components/${path}`
        const tag = args.tag ? args.tag : 'div'
        const upperSingleCategory = category.charAt(0).toUpperCase() + category.slice(1, -1)
        return { ...answers, path, abs_path, tag,
          upperTag: tag.charAt(0).toUpperCase() + tag.slice(1),
          upperSingleCategory
        }
      })
  }
}