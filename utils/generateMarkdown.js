const licenseBadges = {
  Apache: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  BSD3: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  GPL3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
const licenseLinks = {
  Apache: "[License: Apache2](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[License: MIT](https://opensource.org/licenses/MIT)",
  BSD3: "[License: BSD3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  GPL3: "[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
}

function renderLicenseBadge(license) {
  // function pass in license as object list and return badge graphic and link
  // If there is no license, return an empty string
  if (license) {
  return licenseBadges[license]
  }
  else { return "" }
}

function renderLicenseLink(license) {
  // function pass in license as object list and return link to license page
  // if there is no license return empty string
  if (license) {
   return licenseLinks[license]
  }
  else { return "" } 
}

function tableContents (data) {
    let tableVals = []
    sections = Object.keys(data);
    for (let i=0;i < sections.length; i++) {
        //skip adding title to the table of contents
        if (sections[i] === "title") { 
          continue 
        } 
        else {
          tableVals.push(`[${sections[i]}](#${sections[i]})\n`);
        };
    }
    //return tableVals.forEach((v) => v)
    return tableVals
}

function generateMarkdown(data) {
  // function to render markdown from object data
  let tableOfContents = tableContents(data);
  contentData = tableOfContents.join('\n');
  data =  
  `${renderLicenseBadge(data.license)}
   # ${data.title}
   ## Table of contents     
   ${contentData}
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
   ## Questions
   ### Email:
   ${data.email}
   ### Username:
   ${data.username}
   ## License
   ${renderLicenseLink(data.license)}
  `;
  return data;
}

module.exports = {
  generateMarkdown,
  licenseLinks,
  tableContents,
}