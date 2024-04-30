const path = require('path');

    module.exports = {
    mode: 'development',
    entry: './source/scripts/main.js',
    output: {
    path: path.resolve(__dirname, 'build/scripts'),
    filename: 'main.js',
    },
    module: {
    rules: [{
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ],
    },
};

// tinha feito esse arquivo justamente pra servir de configuraçao pro webpack, nao deu boa mas vou deixar aqui como recordaçao