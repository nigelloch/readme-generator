

function generateMarkdown (response, info) {

  // ![Github license](http://img.shields.io/badge/license-${response.license}-blue.svg)

  console.log(response)

    let markdownText = 
      `
      # ${response.title}

      ## Description
        ${response.description}

      ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Tests](#tests)
        * [Language(s)](#language)
        * [License](#license)
        * [Contributors](#contributors)
        * [Questions](#questions)

      ## Installation
        ${response.install}

      ## Usage
        ${response.usage}

      ## Tests
        ${response.tests}

      ## Language(s) Used
        ${response.language}

      ## License
        ${response.license}

      ## Contributors
        ${response.credits}

      ## Questions
        ${response.questions}
      `
      return markdownText;
      
}

module.exports = generateMarkdown;


