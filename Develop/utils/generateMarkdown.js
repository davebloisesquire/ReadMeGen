// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
    "None": "",
    "Apache 2.0": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "Boost SL 1.0": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "BSD 3": "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    "CC0": "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)",
    "Eclipse": "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    "GNU": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  }
  return badges[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    "None": "",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "Boost SL 1.0": "https://www.boost.org/LICENSE_1_0.txt",
    "BSD 3": "https://opensource.org/licenses/BSD-3-Clause",
    "CC0": "http://creativecommons.org/publicdomain/zero/1.0/",
    "Eclipse": "https://opensource.org/licenses/EPL-1.0",
    "GNU": "https://www.gnu.org/licenses/gpl-3.0",
    "MIT": "https://opensource.org/licenses/MIT",
  }
  return licenseLink[license];
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    const licenseSection = `## License
This project is licensed under ${license}. For more information on this license follow the link below.
${renderLicenseLink(license)}
    `;
    return licenseSection;
  } else {
    return '';
  }
}

function tableOfContentsGenerator(data) {
  var tableOfContents = "## Table of contents"
  if (data.projDesc !== '') {
    tableOfContents += "\r\n\r\n [Description](./#description)"
  }
  if (data.projInst !== '') {
    tableOfContents += "\r\n\r\n [Installation Instructions](./#installation-instructions)"
  }
  if (data.projUsag !== '') {
    tableOfContents += "\r\n\r\n [Usage Instructions](./#usage-instructions)"
  }
  if (data.projGuides !== '') {
    tableOfContents += "\r\n\r\n [Contribution Guidelines](./#contribution-guidelines)"
  }
  if (data.projTest !== '') {
    tableOfContents += "\r\n\r\n [Testing Instructions](./#testing-instructions)"
  }
  if (data.projLicense !== 'None') {
    tableOfContents += "\r\n\r\n [License](./#license)"
  }
  return tableOfContents;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var renderDesc;
  var renderInst;
  var renderUsag;
  var renderTest;
  var renderGuides;
  //Generate description
  if (data.projDesc !== '') {
    renderDesc = `## Description
${data.projDesc}
`
  } else {
    renderDesc = ''
  };

  //Generate instructions
  if (data.projInst !== '') {
    renderInst = `## Installation Instructions
${data.projInst}
`
  } else {
    renderInst = ''
  };

  //Generate usage
  if (data.projUsag !== '') {
    renderUsag = `## Usage Instructions
${data.projUsag}
`
  } else {
    renderUsag = ''
  };

  //Generate Contribution Guidelines
  if (data.projGuides !== '') {
    renderGuides = `## Contribution Guidelines
${data.projGuides}
`
  } else {
    renderGuides = ''
  };

  //Generate testing instructions
  if (data.projTest !== '') {
    renderTest = `
## Testing Instructions
${data.projTest}
`
  } else {
    renderTest = ''
  };


  return `# ${data.projTitle}
${renderLicenseBadge(data.projLicense)}
${tableOfContentsGenerator(data)}
${renderDesc}
${renderInst}
${renderUsag}
${renderGuides}
${renderTest}
${renderLicenseSection(data.projLicense)}
`;
}


module.exports = generateMarkdown;
