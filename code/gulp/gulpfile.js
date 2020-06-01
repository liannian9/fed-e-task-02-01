//gilp 的入口文件
//gulp 没有同步模式 需要执行异步回调才能结束任务


//=======普通任务=====
// exports.foo = (done) => {
//     console.log('foo working')

//     done()
// }

// exports.default = (done) => {
//     console.log('default working')

//     done()
// }

// const gulp = require('gulp')

// //4.0之前需要注册模块 生成任务 不被推荐
// gulp.task('bar', (done) => {
//     console.log('4.0 working')
//     done()
// })

//=============组合任务===============
// const {series, parallel} = require('gulp')

// const task1 = done => {
//     setTimeout(() => {
//         console.log('task1 working')
//         done()
//     },1000)
// }

// const task2 = done => {
//     setTimeout(() => {
//         console.log('task2 working')
//         done()
//     },1000)
// }

// const task3 = done => {
//     setTimeout(() => {
//         console.log('task3 working')
//         done()
//     },1000)
// }


// exports.foo = series(task1, task2, task3) //串行任务 依次执行
// exports.bar = parallel(task1, task2, task3) //并行任务 同时执行


//=============异步任务的三种方式===============

// exports.callback = done => {
//     console.log('callback task')
//     done()
// }

// exports.callback_error = done => {
//     console.log('callback task')
//     done(new Error('task error'))
// }

// exports.promise = done => {
//     console.log('promise task')
//     // return Promise.resolve()
//     return Promise.reject(new Error('promise error'))
// }

// const asyncPro = (time) => {
//     return new Promise((resolve, rejected) => {
//         setTimeout(resolve, time)
//     })
// }
// const fs = require('fs')
// exports.async = async() => {
//     await asyncPro(1000)
//     console.log('promise task')
// }

// exports.stream = () => {
//     const readStream = fs.createReadStream('package.json')
//     const WriteStream = fs.createWriteStream('package.txt')
//     readStream.pipe(WriteStream)
//     return readStream
// }

//=============构建过程核心工作原理===============
// const fs = require('fs')
// const {Transform} = require('stream')
// exports.default = () => {
//     //文件读取流
//     const read = fs.createReadStream('base.scss')
//     //文件写入流
//     const write = fs.createWriteStream('base.min.scss')
//     //文件转换流
//     const transform = new Transform({
//         transform:(chunk,encoding, callback) => {
//             //核心转换过程实现
//             //chunk =》 读流中读取到的内容（buffer）
//             const input = chunk.toString();
//             const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g,'')
//             callback(null,output)
//         }
//     })
//     //将文件读取流导入文件写入流
//     read
//     .pipe(transform)//转换
//     .pipe(write)//写入

//     return read;
// }

//=============文件操作api + 插件的使用===============

const {src, dest} = require('gulp')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
exports.default = () => {
   return src('*.scss')
   .pipe(rename({extname:'.min.scss'}))
   .pipe(dest('dist'))
}