# git常用命令git

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


