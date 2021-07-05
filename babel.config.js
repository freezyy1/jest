// этот файл создан чтобы работать с es6. файл создается в корневой папке и перед использованием нужно написать в терминал:
// npm i --save-dev babel-jest @babel/core @babel/core @babel/preset-env
module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
