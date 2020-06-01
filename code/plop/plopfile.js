/*
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-01 19:36:10
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-01 19:45:22
 */ 
//plop入口文件，需要导出一个函数
//此函数接受一个plop对象，用于创建生成器任务

module.exports = plop => {
  plop.setGenerator('component', {
      description:'create a component',
      prompts:[
        {
          type:'input',
          name:'name',
          message:'component name',
          default:'my component'
        }
      ],
      actions:[
        {
          type:'add',
          path:'src/components/{{name}}/{{name}}.js',
          templateFile:'plop-templates/component.hbs'
        },
        {
          type:'add',
          path:'src/components/{{name}}/{{name}}.css',
          templateFile:'plop-templates/component.css.hbs'
        },
      ]
  })
}