/*
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-01 18:56:39
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-01 19:00:44
 */ 
const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  writing () {
    const teml = this.templatePath('foo.txt')
    const output = this.destinationPath('foo1.txt')

    const context = {title:'hello lll', success:false}

    this.fs.copyTpl(teml, output, context)
  }
}