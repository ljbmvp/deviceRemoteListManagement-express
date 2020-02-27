# git常用命令

## 1.git config命令的作用是配置git的相关信息
## 2.配置全局的用户名和邮箱
    git config --global user.name "name"
    git config --global user.email "eamil"

## 3.查看git所有配置信息
    git config --list
## 4.查看配置的用户名和邮箱
    git config user.name
    git config user.email
## 5.定义命令别名
    git config --global alias.st status：则git status可用git st代替
    git config --global alias.co checkout：则git checkout可用git co代替
    git config --global alias.ci commit：则git commit可用git ci代替
    git config --global alias.br branch：则git branch可用git br代替

## 6.git add命令的作用是将文件从工作目录添加至暂存区
    git add fileName
    （1）把所有修改的信息添加到暂存区：git add .
    （2）把所有跟踪文件中被修改过或已删除的文件信息添加至暂存区：git add -u或git add --update，它不会处理那些没有被跟踪的文件
    （3）把所有跟踪文件中被修改过或已删除文件和所有未跟踪的文件信息添加到暂存区：git add -A或git add --all



