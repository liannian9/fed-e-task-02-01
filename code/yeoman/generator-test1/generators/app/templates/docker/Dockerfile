FROM tomcat:8.5.43-jdk8-openjdk
ENV TZ=Asia/Shanghai
## 定义变量、后续会使用 ，具体路径可以先启动容器然后进入进行查看
ENV DIR_WEBAPP /usr/local/tomcat/webapps
## 删除webapp下所有文件，因为当前应用作为根应用
RUN  rm -rf $DIR_WEBAPP/*
ADD shop-plus.war $DIR_WEBAPP/ROOT.war
RUN mkdir -p $DIR_WEBAPP/ROOT && unzip $DIR_WEBAPP/ROOT.war  -d  $DIR_WEBAPP/ROOT && rm -rf $DIR_WEBAPP/ROOT.war
EXPOSE 8080
CMD ["catalina.sh", "run"]