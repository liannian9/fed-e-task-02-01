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
module.exports = grunt => {
   // 插件配置项通过grunt.initConfig来初始化
   grunt.registerTask('default', function () {
     console.log('default');
     var done = this.async();
      // Run some sync stuff.
      grunt.log.writeln('Processing task...');
      // And some async stuff.
      setTimeout(function() {
        grunt.log.writeln('All done!');
        done();
      }, 1000);
   })
}
