# deviceRemoteListManagement-express 项目部署
## 1.运行 npm init 安装第三方类库（如运行较慢或卡死，需要安装淘宝镜像cnpm进行安装 ）
## 2.npm自定义全局设置
    npm config set prefix "D:\dev\nodejs\node_modules\npm\node_global_modules"
    npm config set cache "D:\dev\nodejs\node_modules\npm\node_cache"
### （注：如设置错误导致运行命令报错，可手动删除用户目录下的.npmrc，再次进行设置）

## 3.淘宝镜像设置
      npm install -g cnpm --registry=https://registry.npm.taobao.org  

### （注：如运行cnpm命令不是内部或外部命令，需要将设置的prefix目录添加到环境变量path中）   

## 4.在服务器上用pm2运行app，关于pm2的配置文件可查看相关资料，配置完成后运行
    启动服务 pm2 start
    停止服务 pm2 stop all
 ###  (注：更多pm2命令可查看相关资料)   

 ## 5.通过创建批处理文件创建快捷方式，在桌面创建记事本文件，重命名“startApp.bat”,内容如下
    d:
    cd "D:\--D盘的文件目录"
    pm2 start

