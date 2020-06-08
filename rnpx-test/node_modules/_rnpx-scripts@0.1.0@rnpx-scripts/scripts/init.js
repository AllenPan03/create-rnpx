const fs = require("fs");
let path = require('path');

/**
 * Hybrid项目初始化
 */
exports.hybridInit = () => {
    init('h5', 'hybrid-config');
}
/**
 * h5项目初始化
 */
exports.h5Init = () => {
    init('h5', 'h5-config');
}
/**
 * 项目初始化
 * @param {*} type 模板类型
 * @param {*} tplName 模板仓储名称
 */
function init(type, tplName) {
    const workspace = path.join(process.cwd(), tplName);
    const tplUrl = `git@git.jinlins.work:fed/${tplName}.git`;
    if (digo.existsDir(workspace)) {
        // 判断模板文件是否存在，如存在则删除
        digo.deleteDir(workspace)
        console.log(`删除${workspace}`)
    }
    initRespository(path.join(workspace, './config'), tplUrl);
    console.log(`${type}模板初始化完成！`);
    setTimeout(() => {
        digo.deleteDir(workspace);//删除config文件夹
    }, 3000)
}
/**
 * 初始化hybrid配置
 * @param {*} hybridSrc hybrid-config路径
 * @param {*} gitRepository hybrid-config仓储地址
 */
function initRespository(hybridSrc, gitRepository) {
    digo.exec(`git clone ${gitRepository}`);
    copyDir(hybridSrc, path.resolve(process.cwd()));
}
/**
 * 文件拷贝
 * @param {*} hybridSrc hybrid-config路径
 * @param {*} dst 项目源目录
 */
function copyDir(hybridSrc, dst) {
    let paths = fs.readdirSync(hybridSrc); //同步读取当前目录
    paths.forEach(function (path) {
        var _src = hybridSrc + '/' + path;
        var _dst = dst + '/' + path;
        fs.stat(_src, function (err, stats) { //stats 该对象 包含文件属性
            if (err) throw err;
            if (stats.isFile()) { //如果是个文件则拷贝
                let readable = fs.createReadStream(_src);//创建读取流
                let writable = fs.createWriteStream(_dst);//创建写入流
                readable.pipe(writable);
            } else if (stats.isDirectory()) { //是目录则 递归
                checkDirectory(_src, _dst, copyDir);
            }
        });
    });
}
/**
 * 判断文件与目录是否存在，不存在则创建
 * @param {*} src hybrid-config路径
 * @param {*} dst 源目录
 * @param {*} callback 回调函数
 */
function checkDirectory(src, dst, callback) {
    fs.access(dst, fs.constants.F_OK, (err) => {
        if (err) {
            fs.mkdirSync(dst);
            callback(src, dst);
        } else {
            callback(src, dst);
        }
    });
};