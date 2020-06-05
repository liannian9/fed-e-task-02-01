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
    我们在创建前端项目时，需要生成并配置很多基础文件、插件，工程化可以帮助我们快速搭建项目生成基础文件及配置；

    1.一个公司如果有
```
### 2.你认为脚手架除了为我们创建项目结构，还有什么更深的意义。

```

```
## 编程题

### 1.概述脚手架实现的过程，并使用NodeJS完成一个自定义的小型脚手架工具

```
实现过程：
1.初始化生成一个package.json
2.在package.json中配置bin路径，定义入口文件，并根据路径生成对应文件
3.cli文件中对应的入口文件中需要设置 文件头 #!usr/bin/env node,（让系统动态的去查找node来执行你的脚本文件）（如果是linux或者macox系统下还需要修改此文件的读写权限755(chmod 755 cli.js实现权限修改)
4.编写业务代码
5.完成之后yarn link(本地全局)/npm publish(发布npm市场)
6.创建一个文件在文件中进行使用本地直接在命令行输入cli脚手架名，npm下载需要先下载插件然后在命令行输入脚手架名

代码位于homework下node_cli文件
```

<!-- 2-3 题基础代码下载地址：https://github.com/lagoufed/fed-e-code/blob/master/part-02/module-01/作业案例基础代码.zip?raw=true -->
```
  本次作业中的编程题要求大家完成相应代码后，录制视频简单介绍实现思路，演示相应功能。最终录制的视频与代码同意提交至作业仓库
```
### 2.尝试使用gulp完成项目的自动化构建
```
    视频位于 homework/vedio/grunt.mp4
    homework下的grunt文件
```
### 3.尝试使用grunt完成项目的自动化构建
```
    视频位于 homework/vedio/gulp.mp4
    homework下的gulp文件
```


