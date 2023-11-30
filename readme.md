[![Netlify Status](https://api.netlify.com/api/v1/badges/8818988c-9fc4-46dd-be25-4b95317ec20e/deploy-status)](https://app.netlify.com/sites/dynamic-frangipane-ce723f/deploys)

# Freelance Aberystwyth Website

![Freelance Aberystwyth Logo](https://freelanceaber.com/assets/img/opengraph-default.jpg)

Welcome to the GitHub repository for [Freelance Aberystwyth Llawrydd](https://freelanceaber.com)

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

[Freelance Aberystwyth](https://freelanceaber.com) is a network of freelancers and clients in Aberystwyth and the surrounding areas. This GitHub repository contains the source code for the main website, which is built using the static site generator [Eleventy](https://www.11ty.dev/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/freelanceaber/website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development Server

Run the following command to start a local development server:

```bash
npm run serve
```

This will build the site, watch for changes, and serve it locally. Open your browser and go to `http://localhost:8080` to view the website.

### Build for Production

To build the website for production, use the following command:

```bash
npm run build
```

This will generate the optimized files in the `_site` directory.

## Folder Structure

- **.eleventy.js**: Configuration file for Eleventy.
- **src/**: Contains the source code for the website.
  - **_data/**: Data files for Eleventy.
  - **_includes/**: Reusable components and layouts.
  - **_layouts/**: HTML layouts for different pages.
  - **_pages/**: Markdown or HTML files for individual pages.
  - **_sass/**: Sass files for styling.
  - **assets/**: Static assets like images, styles, and scripts.
- **.gitignore**: Specifies files that should be ignored by Git.
- **package.json**: Node.js project configuration file.
- **README.md**: This file.

## Contributing

We welcome contributions! If you find any issues or have suggestions for improvement, please open an issue or create a pull request. Please read our [Contribution Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).

Happy coding! 🚀