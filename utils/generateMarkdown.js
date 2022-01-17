const generateMarkdown = response => {
      return `#  ${response.title}

![badge](https://img.shields.io/badge/License-${response.license}-brightgreen)

##  Description

${response.description}

##  Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)
* [Contributors/Resources](#contributors)
* [Questions](#questions)

##  Installation

${response.install}

##  Usage

${response.usage}

##  Tests

${response.tests}

##  License

${response.license}

##  Contributors/Resources

${response.contributors}

##  Questions

If there are any questions about this project, please contact me at <${response.email}>. Thank you!

To see more of my projects, please visit my GitHub Repo at <https://github.com/${response.username}?tab=repositories>

  `;
}

// export markdown to file
module.exports = generateMarkdown;


