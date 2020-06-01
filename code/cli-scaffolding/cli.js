#!/usr/bin/env node
//node cli应用入口文件必须有这样的文件头
//如果是linux或者macox系统下还需要修改此文件的读写权限755
//chmod 755 cli.js实现权限修改

const inquirer = require('inquirer'); //cli脚手架中用于交互的插件
const fs = require('fs')
const path = require('path')
const ejs = require('ejs') //模板引擎
inquirer.prompt([
  {
    type:'input',
    name:'name',
    message:'project name?'
  }
]).then(answer => {
  // console.log(answer)
  //模板目录
  const tmpDir = path.join(__dirname, 'templates')
  //目标目录
  const destDir = process.cwd() // 当前所在目录
  //将模板下的文件全部转换到目标目录
  fs.readdir(tmpDir, (err,files) => {
    if(err) throw err;
    files.forEach(file => {
      //通过模板引擎渲染文件
      ejs.renderFile(path.join(tmpDir, file), answer, (err, res) => {
        fs.writeFileSync(path.join(destDir, file), res)
      })
    })
  })

})