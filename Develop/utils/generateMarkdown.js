// function renderLicenseBadge(license) {
//   if (license === 'No License') {
//     return '';
// } else if (license === 'Apache') {
//     return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
// } else if (license === 'Boost') {
//     return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
// } else if (license === 'Eclipse') {
//     return `![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)`
// } else if (license === 'IBM') {
//     return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`
// } else if (license === 'MIT') {
//     return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
// } else if (license === 'Mozilla') {
//     return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
// } else if (license === 'Unlicense') {
//     return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`
// } else if (license === 'WTFPL') {
//     return `![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)`
// }
// }

// function generateMarkdown (response, info) {

//   // 

//   console.log(response)

//     let markdownText = 

      const generateMarkdown = response => {
      return `
      # ${response.title}

      ![Github license](http://img.shields.io/badge/license-${response.license}-blue.svg)

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


