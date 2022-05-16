// TODO: Create a function to generate markdown for README
function generateMarkdown(userResponse) {
  return `
    # ${userResponse.title}
    ${userResponse.description}
    ## Table of Contents
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contribute](#Contribute)
    * [Test](#Test)
    * [Contact](#Contact)
    ## Description
    ${userResponse.description}
    ## Installation
    ${userResponse.installation}
    ## Usage
    ${userResponse.usage}
    ## License
    This project is licensed under the ${userResponse.license}
    ## Contributing
    ${userResponse.contributing}
    ## Tests
    ${userResponse.test}
    ## Contact
    ${userResponse.email}
    [GitHub](${userResponse.html_url})
  `;
}

module.exports = generateMarkdown;
