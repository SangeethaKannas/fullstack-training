Installation
Add the Jenkins repository to the yum repos, and install Jenkins from here.
•	sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat/jenkins.repo
•	sudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
•	sudo yum install jenkins
Installation of a stable version
There is also a LTS YUM repository for the LTS Release Line
•	sudo wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins-ci.org/redhat-stable/jenkins.repo
•	sudo rpm --import https://jenkins-ci.org/redhat/jenkins-ci.org.key
•	sudo yum install jenkins
Installation of Java
Jenkins requires Java in order to run, yet certain distros don't include this by default. To install the Open Java Development Kit (OpenJDK) run the following:
sudo yum install java
Note: If running CentOS, ensure you follow the guide below.
Start/Stop
•	sudo service jenkins start/stop/restart
•	sudo chkconfig jenkins on
Note: if you get the following error message, ensure that Java has been installed:
Starting jenkins (via systemctl):  Job for jenkins.service failed. See 'systemctl status jenkins.service' and 'journalctl -xn' for details.
            
                                               [FAILED]
What does this package do?
•	Jenkins will be launched as a daemon on startup. See /etc/init.d/jenkins for more details.
•	The 'jenkins' user is created to run this service. If you change this to a different user via the config file, you must change the owner of /var/log/jenkins, /var/lib/jenkins, and /var/cache/jenkins.
•	Log file will be placed in /var/log/jenkins/jenkins.log. Check this file if you are troubleshooting Jenkins.
•	/etc/sysconfig/jenkins will capture configuration parameters for the launch.
•	By default, Jenkins listen on port 8080. Access this port with your browser to start configuration.  Note that the built-in firewall may have to be opened to access this port from other computers.  (See http://www.cyberciti.biz/faq/disable-linux-firewall-under-centos-rhel-fedora/ for instructions how to disable the firewall permanently)
•	A Jenkins RPM repository is added in /etc/yum.repos.d/jenkins.repo
Disable the firewall
firewall-cmd --zone=public --add-port=8080/tcp --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --reload
firewall-cmd --list-all
Important Note on CentOS Java
Jenkins requires Java in order to run, however yum install jenkins does not enforce that java is already installed. Check to make sure that you already hava java installed by running java -version. To further make things difficult for CentOS users, the default CentOS version of Java is not compatible with Jenkins. Jenkins typically works best with a Sun implementation of Java, which is not included in CentOS for licensing reasons.
If you get output similar to the following, it means you're using the default (GCJ) version of Java, which will not work with Jenkins:
java -version
java version "1.5.0"
gij (GNU libgcj) version 4.4.6 20110731 (Red Hat 4.4.6-3)
To correct this, you may need to remove the GCJ version of Java and install a Sun-compatible version.
If you received the above output, uninstall the default java:
 yum remove java
Then after you've uninstalled Java (or if you didn't have Java installed at all to begin with). You need to install a Sun-compatible version of Java. The easiest approach is using OpenJDK, which is available through the EPEL repository (alternatively you may install an official RPM directly from Oracle). To install OpenJDK run the following:
 yum install java-1.7.0-openjdk
Depending on your version of CentOS, the package name for OpenJDK may differ. Use yum search openjdk to check for the name of the package. If OpenJDK is not found at all through yum, you probably need to install the EPEL yum repository. After installation, you should be able to get the following output for java -version:
java -version
java version "1.7.0_79"
OpenJDK Runtime Environment (rhel-2.5.5.1.el6_6-x86_64 u79-b14)
OpenJDK 64-Bit Server VM (build 24.79-b02, mixed mode)

Enable full access for anonymous User
sed -i.bak 's/kavmaria/anonymous/g' /jenkins/config.xml

