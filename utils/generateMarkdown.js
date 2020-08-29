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

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.


---

`;
}

module.exports = generateMarkdown;
