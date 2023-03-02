// function to generate markdown for README
const generateMarkdown = (data) => 
` 
${data.title}

📖 Description

${data.description}
_____________________

📋 Table of Contents

- Installation
- Usage 
- Contributions 
- Tests
- Questions

_____________________

💽 Instructions for Installation 

${data.installation}

_____________________

➡️ Usage Guide 

${data.usage}

_____________________

🤚 Contribution Guidelines 

${data.contibute}

_____________________

🧪 Tests

${data.test}

_____________________

🙋 Questions 

For any questions or suggestions please contact me at ${email}

Github: ${gitUser}



 `




module.exports = generateMarkdown;






