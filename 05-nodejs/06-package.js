
/**
 *  package: package management
 */

// search
// cmd: npm s math
// https://www.npmjs.com/

// istall & use
const uniq = require('./06-package/node_modules/uniq')
console.log(uniq([1,2,3,3]))


// prod & pre independence: prod ind package used in prod environment
// prod: npm i -S uniq
// pre: npm i -D less


// universal install
// npm i -g nodemon


// clone init project, install all package
// npm i


// install specific version
// npm i jquery@1.11.2
// npm r uniq & npm r -g uniq

// shortcut start project
// npm run server
// npm start

// 9.deploy package
// npm publish,  npm unpublish --force


// cnpm: use same as npm
// npm install -g cnpm --registry=https://registry.npmmirror.com
// m1: config tb mirror: npm config set registry https://registry.npmmirror.com/
// m2: npm i -g nrm, nrm use taobao, nrm use npm, npm config list(check mirror)


/**
 * yarn: 1.quick, 2.safe, 3.check integrity before install
 */
// npm i -g yarn
// use: yarn init, yarn (globle) add uniq, yanr remove uniq, 
// config taobao mirror: yarn config set registry https://registry.npmmirror.com/, check: yarn config list
