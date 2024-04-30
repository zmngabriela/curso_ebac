const path=require("path");module.exports={mode:"development",entry:"./source/scripts/main.js",output:{path:path.resolve(__dirname,"build/scripts"),filename:"main.js"},module:{rules:[{test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]}]}};
//# sourceMappingURL=maps/webpack.config.js.map
