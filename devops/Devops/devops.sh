## This is a simple shell script to do the following tasks

## 1. Git pull - Pull the latest from the current branch
## 2. Remove target directories in the build and the war file and logs/applogs/tms/
## 3. Build the project
## 4. copy the created jar to the Tomcat directory 
## 5. Stop and start the tomcat server 

## Please make sure you  the software is available in the following paths
## Please download Maven, JDK, JRE and Tomcat 
## Edit the following locations as per the download path
export PATH=$PATH:/d/maven/bin:/d/node/:
export JAVA_HOME=/d/software/OpenJDK/jdk-11.0.3
export JRE_HOME=/d/software/OpenJDK/jdk-11.0.3
export CATALINA_HOME=/d/tomcat

#Path for tomcat file
#Please replace the below paths if necessary
TOMCAT_PATH=/d/tomcat
PROJECT_DIRECTORY=/d/TMS/TMSRepo

#Project Name
PROJECT_NAME=TMS

#War File Name
WARFILE_NAME=$PROJECT_NAME.war
WARFILE_DIRECTORY=$PROJECT_DIRECTORY/${PROJECT_NAME,,}-web/target/$WARFILE_NAME

# if ($1 != "--restart-only") then
	#Remove war files
	#rm -f $TOMCAT_PATH/webapps/$WARFILE_NAME

	#Pull latest code
	#Un comment below line if needed for every build
	cd $PROJECT_DIRECTORY && git pull

	echo $PROJECT_DIRECTORY/${PROJECT_NAME,,}-common/target
	
	#Clean target folder
	rm -rf $PROJECT_DIRECTORY/${PROJECT_NAME,,}-common/target/*
	rm -rf $PROJECT_DIRECTORY/${PROJECT_NAME,,}-dao/target/*
	rm -rf $PROJECT_DIRECTORY/${PROJECT_NAME,,}-services/target/*
	rm -rf $PROJECT_DIRECTORY/${PROJECT_NAME,,}-web/target/*

	#Build and Deploy
	mvn clean compile package && cp $WARFILE_DIRECTORY $TOMCAT_PATH/webapps/ 

# fi

#Restart Tomcat
#Shutdown tomcat
cd $TOMCAT_PATH && $TOMCAT_PATH/bin/shutdown.bat

#Remove Logs and temp files
rm -rf /d/data/logs/applogs/tms/
rm -rf $TOMCAT_PATH/temp/*

# Remove tomcat war file and associate again
rm -f $TOMCAT_PATH/webapps/$WARFILE_NAME &&  rm -rf $TOMCAT_PATH/webapps/$WARFILE_DIRECTORY && cp $WARFILE_DIRECTORY $TOMCAT_PATH/webapps/  && cd $TOMCAT_PATH && $TOMCAT_PATH/bin/startup.bat

#Restart Tomcat 
#cd $TOMCAT_PATH && $TOMCAT_PATH/bin/startup.bat

## Old commands
## curl -v -u admin:admin http://localhost:8009/manager/text/undeploy?path=/TMS
## curl -v -u admin:admin -X PUT -T /d/TMS/TMSRepo/tms-web/target/TMS.war 'http://localhost:8009/manager/text/deploy?path=/TMS'
