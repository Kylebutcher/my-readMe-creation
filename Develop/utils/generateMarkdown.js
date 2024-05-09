
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  switch(data.license){
    case 'MIT': 
      data.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
  
    case 'The Unlicense':
      data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
      break;
  
    case 'Mozilla Public License 2.0':
      data.license = "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
      break;
  
    default:
      console.log("No license selected")
      break;
  }

  const readME = `
  # ${data.title}

  ${data.license}

  ## Description

    ${data.description}

  ## Table of contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [license](#license)

  [Contributing](#contributing)

  [tests](#tests)

  [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## license

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## tests  

  ${data.tests}

  ## Questions 

  [github](https://www.github.com/${data.github})

  ${data.email}

`;
return readME
}

module.exports = generateMarkdown;

