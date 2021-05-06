// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return license !== 'None' ? `![Github license](https://img.shields.io/badge/License-${license}-blue.svg)` : ``;
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  return  license !== 'None' ? `* [License](#license)` : ``;
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  return license !== 'None' ? (`# License\nThis project is licensed under the ${license} license`) : ``;
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.test}
  ## Questions
  If you have any question about this project, contact me at ${data.email}.
  You can see  my projects at https://github.com/${data.github}/
  ${renderLicenseSection(data.license)}`;
  
}

module.exports = generateMarkdown;
