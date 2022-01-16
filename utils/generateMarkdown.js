
const generateMarkdown = response => {
      return `
  #  ${response.title}

      ![Github license](http://img.shields.io/badge/license-${response.license}-blue.svg)

  ##  Description
    ${response.description}

  ##  Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Tests](#tests)
    * [License](#license)
    * [Contributors/Resources](# ontributors)
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

    If there are any questions about this project, please contact me here: ${response.email}. Thank you!
  `;
}

// export markdown to file
module.exports = generateMarkdown;


