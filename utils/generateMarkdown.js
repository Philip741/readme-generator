// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  data =  
  `# ${data.title}
   ## Table of contents     
   ## Description
   ${data.description}   
   ## Instructions
   ${data.instructions} 
   ## Usage
   ${data.usage} 
   ## Contribution
   ${data.contribution}
   ## Testing instructions
   ${data.testing}
   
  `;
  return data;
}

module.exports = generateMarkdown;
