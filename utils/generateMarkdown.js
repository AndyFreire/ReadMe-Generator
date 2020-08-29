function generateMarkdown(data) {

  let tableOfContents = "";
  if (data.tableOfContents){
    tableOfContents = 
    `## Table of Contents

    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)`
  }

  const issuesBadge = `[![GitHub issues](https://img.shields.io/github/issues/${data.userName}/${data.title})](https://github.com/${data.userName}/${data.title}/issues)`;

  const licenseBadge = `[![GitHub license](https://img.shields.io/github/license/${data.userName}/${data.title})](https://github.com/${data.userName}/${data.title})`;

  const profileImage = `![${data.userName}](https://github.com/${data.userName}.png)`;

  

  return `
# ${data.title}

## Description 

${data.description}

${tableOfContents}

## Installation

${data.installation}

## Usage 

${data.usage}

## Credits

${data.credits}

## License

${licenseBadge}

## Badges

${issuesBadge} 


## Contributing

${data.contributing} 

## Tests

${data.tests}

---

## Questions

${profileImage}

`;
}

module.exports = generateMarkdown;
