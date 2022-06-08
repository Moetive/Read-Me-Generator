// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badgeSelection = answers.licenses[0];
  if (badgeSelection === 'MIT') {
    return "![licenses: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  } else if (badgeSelection === 'Apache') {
    return "[![licenses: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
  } else if (badgeSelection === 'GPLv3') {
    return "[![licenses: GPLv3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]"
  } else if (badgeSelection === 'BSD 3') {
    return "[![licenses: BSD](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
  } else if (badgeSelection ===  'None') {
    return ""
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(answers) {
  const linkSelection = answers.license[0];
  if (linkSelection === 'MIT') {
    return "[This application is covered under the MIT license. Click here for more information.](https://opensource.org/licenses/MIT)"
  } else if (linkSelection ==='Apache') {
    return "[This application is covered under the Apache 2.0 license. Click here for more information](https://opensource.org/licenses/Apache-2.0)"
  } else if (linkSelection === 'GPLv3') {
    return "[This application is covered under the GPLv3 license. Click here for more information.](https://opensource.org/licenses/GPL-3.0)"
  } else if (linkSelection === 'BSD') {
    return "[This application is covered under the BSD 3 license. Click here for more information](https://opensource.org/licenses/BSD-3-Clause)"
  } else if (linkSelection === 'None') {
    return "This application is not covered under any license"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.Title}
  ## Description
  ${answers.Description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Collaboration](#Collaboration)
  - [Test Instructions](#Test Instructions)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${answers.Installation}
  ## Usage
  ${answers.Usage}
  ## Contribution
  ${answers.Collaboration}
  ## Tests
  ${answers.TestInstructions}
  ## Questions
    
  For any questions, feel free to reach out to me at ${answers.email} 
  ${answers.GitHubUsername!=''?'## github link \n'+ answers.GitHubUsername: ''}
  ## License
  ${renderLicenseLink(answers)}

`;
}

module.exports = generateMarkdown;
