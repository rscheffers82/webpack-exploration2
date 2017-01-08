# 2nd Webpack exploration project

1. Setup webpack from scratch
2. Configure Babel and React
3. Code splitting using `webpack.config.js`
4. use CommonsChunkPluginExclude to put dependencies `vendor.js` instead of `bundle.js`
5. Add cache busting to output files
6. Add rifraf to the build for project clean-up
7. Add webpack-dev-server and `serve` script to the project

The react project is taken from [StephenGrider](https://github.com/StephenGrider/WebpackProject) to work of a base and improve the build process and load speed.

You can download this repository by using the green `Clone or Download` button on the right hand side of this page.

```
git clone https://github.com/rscheffers82/webpack-exploration2.git
cd webpack-exploration2
npm install
```

###### To develop further:

`npm run serve` spins up the development server<br />
`npm run build:dev` builds the various project files locally (uncompressed)
`npm run build:prod` builds the various project files locally (compressed)
`deploy:gh` build project and deploy to GitHub (gh-pages branch must be available)

A life example of the project can be viewed [here](https://rscheffers82.github.io/webpack-exploration2/dist).
