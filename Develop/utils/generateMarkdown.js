function renderLicenseBadge(licenses) {
  var licenseBadge = '';
  for (let i = 0; i < licenses.length; i++) {
    licenseBadge += `[![License](https://img.shields.io/badge/License-${licenses[i]}-blue.svg)](./LICENSE) `
  }
  return licenseBadge;
}
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// If there is no license, return an empty string
function renderLicenseSection(license) {}


function generateMarkdown(data) {
  return `# [${data.title}](http://yourlinkhere.com)

  ## Table of Contents
  - [Description](#description📝)
  - [Installation](#installation💻)
  - [Usage](#usage👨‍💻)
  - [Features](#features🎁)
  - [Credits](#credits📣)
  - [Resources](#resources🛠️)
  - [License](#licenses🔍)

  ## Description📝
  ${data.description}

  ## Installation💻
  ${data.installation}
  [Live Demo Link](http://yourlinkhere.com)

  ## Usage👨‍💻
  ${data.usage}

  ## Features🎁
  ${data.features}

  ## Credits📣
  ${data.credits}

  ## Resources🛠️
  ${data.resources}

  ## Licenses🔍
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
