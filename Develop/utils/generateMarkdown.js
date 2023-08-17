// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
    # Table of Contents
    * [Description](#Description)
    * [Installation](# - Installation)
    * [Usage](# - Usage)
    * [License](# - Installation)
    * [Contributing](# - Contributing)
    * [Tests](# - Tests)
    * [Questions](# - Contact - Information)
  
    # Installation
    ${data.installation}
    
    # Usage
    ${data.usage}
    
    # License 
    ${data.license}
    # Contributing 
    ${data.contributing}
    
    # Tests
    ${data.tests}
    
    # Contact Information 
    * GitHub Username: ${data.userName}
    * Contact Email: ${data.userEmail}
    
    # Contributing 
${data.contributing}

# Tests
${data.tests}

# Contact Information 
* GitHub Username: ${data.userName}
* Contact Email: ${data.userEmail}

`;

  `;


  
}

module.exports = generateMarkdown;
