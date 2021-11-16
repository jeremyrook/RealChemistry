# RealChemistry
# Repository for health page
# Problem #4: Campaign Feed #6 - ODS Health Professional Fact Sheets

# Prerequisites
- Node version >=14
  -  Install or upgrade Node: https://nodejs.org/en/download/

# Clone the repo

``` git clone https://github.com/jeremyrook/RealChemistry.git ```

# Install yarn

 ``` npm install yarn ```

 - Docs: https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable

# Update yarn dependencies and add nodeModules

``` yarn ```

# Add Gatsby CLI for tooling 
 - May be needed for running locally

``` yarn add gatsby-cli ```

- Docs: https://www.gatsbyjs.com/docs/tutorial/part-0/

# Run gatsby local

``` yarn gatsby develop ```

# Wait for output and copy link into browser

- ex: http://localhost:8000/

# Other Information

- Layouts
  - used Reactstrap, Bootstrap, utility classes, and css for formatting and resposiveness.

- When resizing in browser, may need to refresh the page after resizing for accurate display.

- To add new component:
  - ``` yarn add <component-repo>```
  - At top of page you want to place component:
    - ``` import <component-name> from <component-repo> ```