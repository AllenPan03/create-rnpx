# 移动端 综合开发脚手架

## 项目初始化
```bash
tnpm i # 安装依赖（确保已经安装了tnpm）
npm run init:hybrid # 非混合项目可略过此步骤
```

## 项目构建命令

|命令|说明|
|---|---|
|`npm run start`|启动开发环境|
|`npm run open`|运行开发服务并打开页面|
|`npm run clear`|清除服务缓存|
|`npm run init:hybrid`|初始化混合项目|
|`npm run init:h5`|初始化h5项目|
|`npm run build:fat`|构建项目（测试环境）|
|`npm run build:uat`|构建项目（综测环境）|
|`npm run build:prd`|构建项目（生产环境）|


## 使用说明

```bash
digo new <分类>/<组件名> [组件显示名] [组件描述] # 创建新组件
digo api # 生成接口文档
```

> 具体示范如下：

``` bash
digo new utils/test 测试工具 主要是用来测试的工具 # 创建辅助函数
digo new components/banner 轮播组件 主要是图片滚动播放 # 创建公用 react 组件
digo new entries/demo 案例 案例页面 # 创建入口组件
digo api # 生成接口文档
```

## Ajax

所有接口都通过 `api.json` 生成，通过修改 `package.json` 中的 env 值来更改后端服务地址。开发环境下url添加参数 `mock=1` 取mock数据，添加参数 `api=http://xxx.com.cn` ,则指向api指定的服务地址。 fat 部分配合后端发布映射，无需使用代理工具，通过打包构建自动区分环境。

#### Mock数据
请将后端api.json放于项目根目录，并运行命令：
```
digo api
```
> 所有mock数据都将存放在 `.mocks/` 下，通过来url上添加?mock=1来启动mock数据

## utm埋点

埋点统计使用：[参考文档](http://doc.fed.jinlins.work/docs/web/utm)

#### 绝对路径
所有存在在`static`下的文件都可直接通过'/xx'的显示直接访问到。最后通过打包，将其所有文件复制至打包文件夹中。

## 参考资料

[WDUI一个开发混合APP应用的组件库](http://npm.jinlins.work/#/detail/@wd-hybrid/wdui)

[混合项目开发文档](http://doc.fed.jinlins.work/docs/show/62)

[移动端中台操作手册](http://doc.fed.jinlins.work/docs/show/63)