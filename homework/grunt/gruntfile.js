/*
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-03 14:25:51
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-03 14:33:33
 */ 
// 实现这个项目的构建任务
// 默认暴露一个函数
// 因为在全局安装了grunt-cli
// 当我们在项目目录输入命令 grunt 的时候
// 这个Gruntfile.js 文件会自动执行
// 这部分官网叫做"wrapper(包裹的意思)"函数，它里面需要封装繁琐的配置。
const loadGrunttasks = require('load-grunt-tasks')
const sass = require('sass')

const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}
module.exports = grunt => {
   // 插件配置项通过grunt.initConfig来初始化
   grunt.initConfig({
        clean:{
          temp:'temp/**',
          dist:'dist/**'
        },
        sass:{
          options:{
              sourceMap:true,
              implementation:sass
          },
          main:{
              files:{
                  'dist/assets/styles/main.css':'src/assets/styles/main.scss',
              }
          }
       },
       babel:{
          options:{
              presets:['@babel/preset-env']
          },
          main:{
              files:{
                  'dist/assets/scripts/main.js':'src/assets/scripts/main.js',
              }
          }
      },
      copy: {
        main: {
          files: [
            //包括路径中的文件
            {expand: true, src: ['public/**'], dest: 'dist'},
      
          ]
        }
      },
      imagemin:{
        dynamic: {
          options: {
            optimizationLevel: 1 //定义 PNG 图片优化水平
          },
          files: [{
              expand: true,
              cwd: 'src/assets/images',//原图存放的文件夹
              src: ['**'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
              dest: 'dist/assets/images' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
          },
          {
            expand: true,
            cwd: 'src/assets/fonts',//原图存放的文件夹
            src: ['**'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
            dest: 'dist/assets/fonts' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
        },
        ]
        }
      },
      web_swig: {
        options: {
          swigOptions:{
            cache: false
          },
          getData: function(tpl){
              return data;
          }
        },
        your_target:{

          expand: true,
          cwd: 'src',//原图存放的文件夹
          src: ['*.html'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
          dest: 'dist' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
        }
      },

   })
   

  //  grunt.loadNpmTasks('grunt-contrib-clean');
  loadGrunttasks(grunt) // 导入所有grunt插件
   grunt.registerTask('default', ['clean', 'sass', 'babel', 'copy', 'imagemin', 'web_swig'])
}
