//Grunt 入口文件
//用于定义一些需要Grunt自动执行的任务
//需要导出一个函数
//此函数接受一个grunt形参，内部提供一些创建任务是可以用到的api
const sass = require('sass')
const loadNpmTasks = require('load-grunt-tasks')
module.exports = grunt => {
    //普通用法 同步异步任务
    // grunt.registerTask('foo', () => {
    //     console.log('hello foo')

    // })
    // grunt.registerTask('bar','任务描述', () => {
    //     console.log('hello bar')
    // })
    // grunt.registerTask('default',['foo','async-task', 'bar'])

    // grunt.registerTask('async-task','任务描述', function() {
    //     const done = this.async()
    //     setTimeout(() => {
    //         console.log('async task working')
    //         done(false)
    //     })
    //     console.log('hello bar')
    // })
    //grunt 配置方法
    // grunt.initConfig({
    //     foo:{
    //         bar:123
    //     }
    // })
    // grunt.registerTask('foo', () => {
    //     console.log(grunt.config('foo').bar)
    // })

    //多目标任务 可以让任务根据配置形成多个子任务

    // grunt.initConfig({
    //     build:{
    //         options:{
    //             foo:'bar'
    //         },
    //         css:{//会覆盖选项
    //             options:{
    //                 foo:'bae'
    //             }
    //         },
    //         js:'2'
    //     }
    // })

    // grunt.registerMultiTask('build',function () {
    //     console.log(this.options())
    //     console.log(`target: ${this.target}, data:${this.data}`)
    // })

    //插件的使用
    // grunt.initConfig({
    //     clean:{
    //         temp:'temp/**'
    //     }
    // })
    // grunt.loadNpmTasks('grunt-contrib-clean')
    //
    //常用插件及总结
        grunt.initConfig({
            
            sass:{
                options:{
                    sourceMap:true,
                    implementation:sass
                },
                main:{
                    files:{
                        'dist/css/main.css':'src/scss/a.scss',
                        'dist/css/main1.css':'src/scss/b.scss',
                    }
                }
            },
            babel:{
                options:{
                    presets:['@babel/preset-env']
                },
                main:{
                    files:{
                        'dist/js/app.js':'src/js/app.js',
                    }
                }
            },
            watch:{//监视文件变化
                js:{
                    files:['src/js/*.js'],//监视的文件
                    tasks:['babel']//文件变化执行的任务
                },
                css:{
                    files:['src/scss/*.scss'],
                    tasks:['sass']
                }
            }

        })
        // grunt.loadNpmTasks('grunt-sass')
        loadNpmTasks(grunt)//自动加载所有grunt插件
        
        grunt.registerTask('default',['sass','babel', 'watch'])
}
