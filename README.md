# Frontend Boilerplate with Webpack, ESLint, and Prettier

This repository provides a **boilerplate** for frontend application development using **HTML**, **CSS**, and **JavaScript**, with integrated **Webpack**, **ESLint**, **Prettier**.
I created this boilerplate for personal use to speed up the project setup phase during my studies but feel free to use it if you like it!

## Technologies

- **Webpack**
- **Babel**
- **ESLint**
- **Prettier**

## Features

- Basic **Webpack** configuration for bundling JavaScript, CSS, and images.
- **ESLint** configured with the **Airbnb JavaScript Style Guide** to ensure clean, consistent code.
- **Prettier** integrated for code formatting.
- **Babel** to ensure JavaScript compatibility across older browsers.
- Support for **hot-reloading** during development.

## How to Use

### 1. Clone the Repository

To get started, clone this repository to your local machine.

### 2. Install Dependencies

Install all the necessary dependencies by running:

`npm install`

### 3. Start the Development Server:

`npm start`

This will start a local server on http://localhost:3000 (or another port configured in Webpack). Changes to files will automatically reload the browser thanks to hot-reloading.

### 4. Build the project:
When you feel ready to build your files, just run:

`npm run build`

### 5. Run ESLint and Prettier

To run ESLint to fix the code, use:

`npm run lint:fix`

### 6. Auto-Formatting in Your Editor

To enable automatic formatting on save in your editor, make sure ESLint and Prettier are properly configured in your development environment:
• Install the ESLint extension in your editor.
• Ensure auto-fixing for ESLint and Prettier are enabled in your editor settings (if you’re using VS Code, add the following configuration to your settings.json):

```{
"editor.codeActionsOnSave": {
"source.fixAll.eslint": "explicit"
},
"editor.defaultFormatter": null,
"editor.formatOnSave": true
}
```

### 7. Project Structure
```{
/src
  /assets        # Images and other static files
  /styles        # CSS files
  index.js       # JS Entry point
  index.html     # Main HTML file
/webpack.config.js # Webpack configuration
/babel.config.js   # Babel configuration
/eslint.json       # ESLint configuration
/package.json      # Dependency and script management
.gitignore         # Files to ignore in Git
}
```
### Contributing

If you want to contribute to this repository, follow these steps: 1. Fork this repository. 2. Create a branch for your changes (git checkout -b feature/xyz). 3. Commit your changes (git commit -m 'Add new feature'). 4. Push your branch (git push origin feature/xyz). 5. Create a pull request.
