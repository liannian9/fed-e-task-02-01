<!--
 * @Description: 
 * @Author: liannian9
 * @Date: 2020-06-01 08:17:20
 * @LastEditors: liannian9
 * @LastEditTime: 2020-06-03 11:08:16
--> 

# fed-e-task-01-02
part2模块一作业

## 简答题

### 1.谈谈你对工程化的初步认识，结合你之前遇到的问题说出三个以上工程化能够解决问题或者带来的价值。

```
    前端工程化是使用软件工程的技术和方法来进行前端的开发流程、技术、工具、经验等规范化、标准化，其主要目的为
    了提高效率和降低成本，即提高开发过程中的开发效率，减少不必要的重复工作时间，一切能提升前端开发效率，提高
    前端应用质量的手段和工具都是前端工程化：

    1.清晰地目录结构可以提高项目的逻辑性，方便资源的统一管理;
    2.现在一个项目往往是多人协作开发，统一的代码风格，代码质量，增加代码的可读性；
    3.对于新成员友好，可以快速读懂项目，加入协作开发；
    4.前后端分离，只要有接口规范，开发上可以更加独立,不在需要依赖于后端接口进行开发；
    5.前端的模块化开发可以将一个页面拆分成相互依赖的小文件，再进行统一的拼装，对重复引用的功能进行封装，减少重复代码；
    6.不在需要为每一个项目重新搭建开发环境及基础代码；
```
### 2.你认为脚手架除了为我们创建项目结构，还有什么更深的意义。

```
    一个脚手架一般会有：相同的组织结构，相同的开发规范，相同的模块依赖，相同的工具配置，相同的基础代码,是对方案的封装
    1.快速生成配置，降低学习成本，对于业务开发者不在需要了解其中的复杂结构，只需要知道如何配置就行了；
    2.可以方便地直接开始做开发，专注你的业务，不用再花时间去配置开发环境及编写基础代码;
    3.节约时间，减少重复性工作而做的工作；

```

## 编程题

### 1.概述脚手架实现的过程，并使用NodeJS完成一个自定义的小型脚手架工具

```
实现过程：
    1.初始化生成一个package.json
    2.在package.json中配置bin路径，定义入口文件，并根据路径生成对应文件
    3.cli文件中对应的入口文件中需要设置 文件头 #!usr/bin/env node,（让系统动态的去查找node来执行你的脚本文件）
    （如果是linux或者macox系统下还需要修改此文件的读写权限755(chmod 755 cli.js实现权限修改)
    4.编写业务代码
    5.完成之后yarn link(本地全局)/npm publish(发布npm市场)
    6.创建一个文件在文件中进行使用本地直接在命令行输入cli脚手架名，npm下载需要先下载插件然后在命令行输入脚手架名

-------------

代码位于homework下node_cli文件

```

<!-- 2-3 题基础代码下载地址：https://github.com/lagoufed/fed-e-code/blob/master/part-02/module-01/作业案例基础代码.zip?raw=true -->
```
  本次作业中的编程题要求大家完成相应代码后，录制视频简单介绍实现思路，演示相应功能。最终录制的视频与代码同意提交至作业仓库
```

### 2.尝试使用gulp完成项目的自动化构建
```
    视频位于 homework/vedio/grunt.mp4
    代码位于homework下的grunt文件
```
### 实现思路
   - 每次压缩打包前文件清空（grunt-contrib-clean）
   - sass的编译(grunt-sass, sass) 区分开发生产环境 sass:dev, sass:prod来执行不同环境任务
   - js的编译(grunt-babel,@babel/core,@babel/preset-env)
   - html的编译(grunt-web-swig)（如果是模板引擎需要下载相应插件进行转化）
   - fonts(字体文件的压缩与文件抽离)(grunt-contrib-imagemin)
   - images的压缩与抽离(grunt-contrib-imagemin)
   - public内的文件抽离 （直接抽离不压缩，只是浏览器上的小标签或者一些不需要压缩的文件 favicon）
   - grunt-usemin 这是一款可以将HTML引用的多个CSS和JS合并起来，减小依赖的文件个数，从而减少浏览器发起的请求次数。grunt-usemin根据注释将HTML中需要合并压缩的区块找出来，对区块内的所有文件进行合并。注意：内部整合了concat，cssmin，ungify可以进行文件合并css，js的压缩，这里有个问题，当html'、内压缩后的css文件为复数时，cssmin会报错，这里修改html文件，让html内只压缩一个css文件，其余文件重新创建cssmin任务
   - 本地服务启动（grunt-browser-sync启动本地服务，grunt-contrib-watch热更新）
   - 代码构建优化（重新整理构建任务，只暴露出需要的任务）（对于部分任务创建dev及prod不同环境任务）
   - 优化：
      + 自动加载所有grunt插件（load-grunt-tasks）
      + 压缩html
      + 创建并行任务，（grunt-parallel）

### 3.尝试使用grunt完成项目的自动化构建
```
    视频位于 homework/vedio/gulp.mp4
    代码位于homework下的gulp文件
```
### 实现思路
   - 每次压缩打包前文件清空（del插件）
   - scss的编译转换(gulp-sass, gulp-clean-css)
   - js的编译(gulp-babel,@babel/core,@babel/preset-env, gulp-uglify)
   - html 的编译 (gulp-htmlmin，gulp-swig)如果是模板引擎需要下载相应插件进行转化）
   - fonts(字体文件的编译与抽离)(gulp-imagemin)
   - images的编译与抽离（压缩(gulp-imagemin)
   - public内的文件抽离 （直接抽离不压缩，只是浏览器上的小标签或者一些不需要压缩的文件 favicon）
   - useref 这是一款可以将HTML引用的多个CSS和JS合并起来，减小依赖的文件个数，从而减少浏览器发起的请求次数。gulp-useref根据注释将HTML中需要合并压缩的区块找出来，对区块内的所有文件进行合并。注意：它只负责合并，不负责压缩！,如果需要做其他操作，可以配合gulp-if插件使用
   - 本地服务启动（browerSync启动本地服务，开发环境代码测试，热更新）
   - 代码构建优化（重新整理构建任务，只暴露出需要的任务，组合出开发与生产环境不同的组合任务）
   - 相关优化：
      + 自动加载所有gulp插件（gulp-load-plugins）
      + 热更新，(watch)