// function to generate markdown for README
const generateMarkdown = (data) => {
`# ${data.title}

# :computer: Description: 
${data.description}

`
}

module.exports = generateMarkdown;
