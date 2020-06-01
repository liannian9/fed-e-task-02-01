/*
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-01 18:54:04
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-01 19:27:55
 */ 
//此文件作为Generator的核心入口
//需要导出一个继承自yeoman generator的类型
//yeoman generator在工作时会自动调用我们在此类型中定义的一些生命周期方法
//我们在这些方法中可以通过调用父类提供的一些工具方法实现一些功能

const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting() {
    return this.prompt([
      {
        type:'input',
        name:'name',
        message:'your project name',
        default:this.appname
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing () {
    const templateArr = [
      'docker/docker-compose.yml',
      'docker/Dockerfile',
      'shop-all/.gitignore',
      'shop-all/pom.xml',
      'shop-all/shop-all.iml',
      'foo.txt',
      'index.html',
      'shop-plus.iml'
    ]

    templateArr.forEach(item => {
      const teml = this.templatePath(item)
      const output = this.destinationPath(item)
  
      const context = this.answers
  
      this.fs.copyTpl(teml, output, context)
    })
    
  }
}