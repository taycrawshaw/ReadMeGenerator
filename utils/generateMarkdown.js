// function to generate markdown for README

const getBadge = (data) => {

    const badgeChoices = {
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "GPL": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "BSD": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    };

    const userChoice = data.license;

   return badgeChoices[userChoice];
    
    }

const getBadgeDescription = (data) => {
    const badgeDesChoices = {
        "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
        "Boost": "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
        "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
        "GPL": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
        "BSD": "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
        };

    const userChoiceInfo = data.license;

    return badgeDesChoices[userChoiceInfo];
}

const generateMarkdown = (data) => 
` 
## ${data.title}

📖 Description

${data.description}

${getBadge(data)}
_____________________

### 📋 Table of Contents

- [Installation](#-instructions-for-installation)
- [Usage](#-usage-guide) 
- [Contributions](#-contribution-guidelines) 
- [Tests](#-tests)
- [Questions](#-questions)

_____________________

### 💽 Instructions for Installation 

${data.installation}

_____________________

### ➡️ Usage Guide 

${data.usage}

_____________________

### 🤚 Contribution Guidelines 

${data.contibute}

_____________________

### 🧪 Tests

${data.test}

_____________________

### 🙋 Questions 

For any questions or suggestions please contact me at ${data.userEmail}

Github: ${data.gitUser}



 `




module.exports = generateMarkdown;






