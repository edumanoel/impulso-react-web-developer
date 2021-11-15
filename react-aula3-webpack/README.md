# Integrando webpack com React

### Crie o arquivo public/index.html

```html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React - Webpack 4 + Babel</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

### Crie o arquivo scr/index.js

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
ReactDOM.render(<App />, document.getElementById("app"));
```

### Crie o arquivo scr/app.js

```javascript
import React from "react";
const App = () => {
  return (
    <div>
      <h1>Seja bem vindo ao React</h1>
    </div>
  );
};
export default App;
```

## Instalando e configurando webpack

```
npm init
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin html-loader
```

### Crie o arquivo "webpack.config.js"

```javascript
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "sourcemap",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundler.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
```

### Adicione os "Scripts" abaixo no arquivo package.json

```
"scripts": {
    "build" : "webpack --mode production",
    "dev" : "webpack --mode development",
    "start:dev" : "webpack-dev-server"
  },
```

Exemplo:

```json
{
  "name": "Meu-App",
  "version": "1.0.0",
  "main": "./src/index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "start:dev": "webpack-dev-server"
  },
  "license": "MIT",
  "devDependencies": {
    "html-loader": "^3.0.1",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.63.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0"
  }
}
```

### Instalar Babel

```
npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react
```

### Crie o arquivo .babelrc

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### Instalar React

```
npm i react react-dom
```

### Instalar EsLint

```
npm i -D eslint babel-eslint eslint-plugin-react eslint-watch
```

### Crie o arquivo .eslintrc

```json
{
  "plugins": ["react"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es7": true,
    "browser": true,
    "node": true,
    "mocha": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "rules": {
    "semi": [2, "always"],
    "indent": ["error", 2],
    "object-curly-spacing": ["error", "always"],
    "no-extra-parens": "error",
    "max-len": [
      "error",
      {
        "code": 100
      }
    ],
    "no-multi-spaces": "error"
  },
  "settings": {
    "react": {
      "version": "17"
    }
  }
}
```

### Adicione o EsLint aos "Scripts" no arquivo package.json

```
"eslint": "eslint ./src/*.js"
```

Exemplo:

```json
{
  "name": "react-aula3-webpack",
  "version": "1.0.0",
  "main": "./src/index.js",
  "scripts": {
    "build": "webpack --mode production",
    "dev": "webpack --mode development",
    "start:dev": "webpack-dev-server",
    "eslint": "eslint ./src/*.js"
  },
  "license": "MIT",
  "devDependencies": {
    "@babel/core": "^7.16.0",
    "@babel/preset-env": "^7.16.0",
    "@babel/preset-react": "^7.16.0",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.3",
    "eslint": "^8.2.0",
    "eslint-plugin-react": "^7.27.0",
    "eslint-watch": "^8.0.0",
    "html-loader": "^3.0.1",
    "html-webpack-plugin": "^5.5.0",
    "webpack": "^5.63.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0"
  },
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  },
  "description": "React com Webpack",
  "author": "Eduardo Belém"
}
```
