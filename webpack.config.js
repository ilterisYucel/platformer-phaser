const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
 "mode": "none",
 "entry": "./src/index.ts",
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devtool: 'eval-cheap-module-source-map',
 devServer: {
   static: {
     directory: path.join(__dirname, 'dist'),
   },
   compress: true,
   port: 8080
 },
 "module": {
   "rules": [
      {
        test: /\.ts$/,
        exclude: /node_module/,
        use: 'ts-loader'
      },
      {
       "test": /\.css$/,
       "use": [
         "style-loader",
         "css-loader",
       ]
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
            "@babel/preset-env",
           ]
          }
        }
      },
      {
        test: /\.(jpeg|jpg|png|gif)$/,
        type: 'asset/resource',
      },
      {
        test: /\.mp4$/,
        use: 'file-loader?name=videos/[name].[ext]',
      },
    ]
  },
  plugins: [
    new Dotenv()
  ],
  resolve: {
    extensions: [".ts", ".js"],
}
};
