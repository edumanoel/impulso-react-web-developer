# Impulso React Web Developer

### Crie o arquivo public/index.html
``` html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React - Webpack 4 + Babel</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```

### Crie o arquivo scr/index.js
``` javascript
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
ReactDOM.render(<App />, document.getElementById('app'))
```

### Crie o arquivo scr/app.js
``` javascript
import React from "react"
const App = () => {
    return (
        <div>
            <h1>Seja bem vindo ao React</h1>
        </div>
    )
}
export default App
```

## Instalando e configurando webpack
````
npm init
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
````

### Crie um arquivo "webpack.config.js"
``` javascript
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        })
    ]
}
```

### Adicione os "Scripts" abaixo no arquivo package.json
``` json
{
  "name": "Meu-App",
  "version": "1.0.0",
  "main": "./src/index.js",
  "scripts": {
    "build" : "webpack --mode production",
    "dev" : "webpack --mode development",
    "start:dev" : "webpack-dev-server"
  },
  "license": "MIT",
  "devDependencies": {
    "webpack": "^5.63.0",
    "webpack-cli": "^4.9.1",
    "webpack-dev-server": "^4.4.0"
  }
}
```

### Instalar Babel
````
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
````

### adicione no arquivo "webpack.config.js"
``` javascript
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```

### Crie o arquivo .babelrc
``` json
{
    "presets":[
        "@babel/preset-env",
        "@babel/preset-react"
    ]
}
```

### Instalar React
```
npm i react react-dom
```
