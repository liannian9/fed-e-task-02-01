/*
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-03 14:25:51
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-04 09:38:36
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
  menus: [{
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
      children: [{
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
    clean: { //文件清除
      dist: 'dist/**',
      temp: '.tmp/**',
    },
    sass: {
      dev:{
        options: {
          sourceMap: true, //dev启动文件镜像
          implementation: sass
        },
        expand: true,
          cwd: 'src/assets/styles/', //样式目录
          src: ['*.scss'], // 优化 styles 目录下所有 scss
          dest: 'dist/assets/styles/', // 优化后的文件保存位置
          ext:'.css'
      },
      prod:{
        options: {
          implementation: sass
        },
        expand: true,
          cwd: 'src/assets/styles/', //样式目录
          src: ['*.scss'], // 优化 styles 目录下所有 scss
          dest: 'dist/assets/styles/', // 优化后的文件保存位置
          ext:'.css'
      }
    },
    babel: {
      options: {
        presets: ['@babel/preset-env']
      },
      main: {
        expand: true,
        cwd: 'src/assets/scripts/', //原js文件存放的文件夹
        src: ['*.js'], // 优化 scripts目录下所有 js文件
        dest: 'dist/assets/scripts/' // 优化后的文件保存位置
      }
    },
    copy: {
      main: {
        files: [
          //包括路径中的文件
          {
            expand: true,
            src: ['public/**'],
            dest: 'dist'
          },

        ]
      }
    },
    imagemin: {
      dynamic: {
        options: {
          optimizationLevel: 1 //图片优化水平
        },
        files: [{
            expand: true,
            cwd: 'src/assets/images', //原图存放的文件夹
            src: ['**'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
            dest: 'dist/assets/images' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
          },
          {
            expand: true,
            cwd: 'src/assets/fonts', //字体文件存放的文件夹
            src: ['**'], // 优化 fonts 目录下所有 字体文件
            dest: 'dist/assets/fonts' // 优化后的字体文件保存位置，覆盖旧图片，并且不作提示
          },
        ]
      }
    },
    web_swig: {
      options: {
        swigOptions: {
          cache: false
        },
        getData: function (tpl) {
          return data;
        }
      },
      your_target: {
        expand: true,
        cwd: 'src', //原图存放的文件夹
        src: ['*.html'], // 优化 img 目录下所有 png/jpg/jpeg/gif图片
        dest: 'dist' // 优化后的图片保存位置，覆盖旧图片，并且不作提示
      }
    },
    useminPrepare: {
      html: 'dist/*.html',
      options: { 
        root:['dist', '.'],
        dest: 'dist' //输出目录
      },
      
    },
    usemin: {
      html: ['dist/*.html'], // 注意此处是build/
    },
    cssmin: {
      options: {
        compatibility: 'ie8', //设置兼容模式 
        noAdvanced: true //取消高级特性 
      },
      
      compress: {
        files: {
          'dist/assets/styles/main.css': 'dist/assets/styles/main.css',
        },
        
      },
    },
    htmlmin: {                                     // Task
      dist: {                                      // Target
        options: {                                 // Target options
          removeComments: true, //移除注释
          removeCommentsFromCDATA: true,//移除来自字符数据的注释
          collapseWhitespace: true,//无用空格
          collapseBooleanAttributes: true,//失败的布尔属性
          removeAttributeQuotes: true,//移除属性引号      有些属性不可移走引号
          removeRedundantAttributes: true,//移除多余的属性
          useShortDoctype: true,//使用短的跟元素
          removeEmptyAttributes: true,//移除空的属性
          removeOptionalTags: true//移除可选附加标签
        },
        expand: true,
        cwd: 'dist/', //字体文件存放的文件夹
        src: ['*.html'], // 优化 fonts 目录下所有 字体文件
        dest: 'dist/' // 优化后的字体文件保存位置，覆盖旧图片，并且不作提示     // 'destination': 'source'
          
      },
      
    },
    browserSync: {
      bsFiles: {
        src: 'dist/'
      },
      options: {
        server: {
          baseDir:['dist/', 'src', 'public'], //按顺序寻找文件，dist(招不到) ===>src ===>public
          routes:{
              '/node_modules':'node_modules' 
          }
        },
        
        watchTask: true,
      }
    },
    watch: {
      src: {
        files: ['src/**'],
        tasks: ['parallel:dev'],
        options: {
          interrupt: true,
        },
      },
    },
    parallel: {
      dev: {
        options: {
          grunt: true
        },
        tasks: ['sass:dev','babel', 'web_swig']
      },
      prod:{
        options: {
          grunt: true
        },
        tasks: ['sass:prod','babel', 'copy', 'imagemin', 'web_swig']
      }
    }
  })


  //  grunt.loadNpmTasks('grunt-contrib-clean');
  loadGrunttasks(grunt) // 导入所有grunt插件
  grunt.registerTask('useref', ['useminPrepare', 'concat', 'uglify','cssmin', 'usemin'])
  grunt.registerTask('dev', ['clean','parallel:dev', 'browserSync', 'watch'])
  grunt.registerTask('build', ['clean', 'parallel:prod', 'useminPrepare', 'concat', 'uglify','cssmin', 'usemin'])

}
