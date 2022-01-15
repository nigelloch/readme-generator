// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown (response, info) {

  console.log(response)


    let markdownText = 
      `
      # ${response.title}

      ## Description
        ${response.description}

      ## Installation
        ${response.install}

      ## Application
        ${response.work}

      ## Credit
        ${response.credits}

      ## Language(s) Used
        ${response.language}

      ## Contact Information
      ${response.license}
      `
      return markdownText;
}


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

module.exports = generateMarkdown;


