    if [ $# -ne 3 ] ; then
  echo "Usage: $0 ClusterIP Username Password"
  echo "\n"
  exit 1
fi

echo "**** Prebuild Step"
export PATH=$PATH:/usr/java/jdk1.8.0_161/bin:/opt/gradle/gradle-4.6/bin

if [ $? -ne 0 ]; then
	echo "*** Failed at Prebuild step, code = $?"
	exit 1
fi

echo "*** Updating sub modules Step"
git submodule foreach git pull

if [ $? -ne 0 ]; then
	echo "*** Failed at updating sub modules step, code = $?"
	exit 1
fi

echo "*** Build Step"
./build.sh

if [ $? -ne 0 ]; then
	echo "*** Failed at build step, code = $?"
	exit 1
fi

echo "*** Deploy Step"

if [ $? -ne -0 ]; then
	echo "*** Failed at deploy step"
	exit 1
fi

exit 0

    
    1  sudo passwd postgres
    2  ls
    3  su - postgres
    4  vi sudo
    5  postgres
    6  exit
    7  docker ps
    8  yum install postgresql\*
    9  yum remove postgresql
   10  yum-complete-transaction --cleanup-only
   11  yum remove postgresql
   12  yum install postgresql
   13  sudo -u postgres postgres
   14  sudo -u postgres psql postgres
   
	yum remove postgresql postgresql-server
    yum install postgresql postgresql-server
       
    systemctl start postgresql
    sudo postgresql-setup initdb
    sudo postgresql-setup metricsdb
   22  sudo postgresql-setup upgrade
   23  rm -rf /var/lib/pgsql/data
   24  sudo postgresql-setup initdb
   25  sudo systemctl start postgresql
   26  sudo systemctl enable postgresql
   27  sudo -i -u postgres
   28  su -
   29  sudo -i -u metricsuser
   30  sudo -i -u postgres
   31  sudo -
   32  vi sudo
   33  sudo -i -u postgres
   34  sudo -i -u metricsdb
   35  sudo -i -u postgres
   39  ./mvnw install dockerfile:build  > run.log
   40  cat run.log | more
   41  vi config/application.properties 
   42  ./mvnw install dockerfile:build  > run.log
   43  cat run.log | more
   44  psql -d metricsuser
   45  sudo add user metricsdb
   46  sudo adduser metricsdb
   47  sudo -i -u metricsdb
   48  sudo deleteuser metricsdb
   49  sudo removeuser metricsdb
   50  sudo adduser sansanth
   51  sudo -i -u postgres
   52  sudo -i -u sansanth
   53  vi config/application.properties 
   54  more run.log
   55  ./mvnw install dockerfile:build  > run.log
   56   more run.log
   57  sudo -i -u sansanth
   58  ls
   59  dir
   60  exit
   61  sudo -i -u sansanth
   62   more run.log
   63  exit
   64  root
   65  pwd
   66  cd  springboot/spring-1.5.9.RELEASE/metrics/metrics/
   67  ls
   68  ./postgres
   69  ls
   70  vi config/application.properties 
   71  ./mvnw install dockerfile:build  > run.log
   72  more run.log
   73  cat config/application.properties 
   74  vi config/application.properties 
   75  ./mvnw install dockerfile:build  
   76  ./mvnw install dockerfile:build  > run.log
   77  more run.log
   78  locate pg_hba.conf
   79  cat /var/lib/psql/data/pg_hba.conf
   80  cat /var/lib/pgsql/data/pg_hba.conf
   81  vi /var/lib/pgsql/data/pg_hba.conf
   82  ./mvnw install dockerfile:build  > run.log
   83  more run.log
   84  vi /var/lib/pgsql/data/pg_hba.conf
   85  locate postgresql.conf
   86  vi /var/lib/pgsql/data/postgresql.conf 
   87  iptables -A INPUT -s 0/0 -p tcp --dport 5432 -j ACCEPT
   88  ./mvnw install dockerfile:build  > run.log
   89  more run.log
   90  ifconfig
   91  iptables -A INPUT -s 0/0 -p tcp --dport 5432 -j ACCEPT
   92  ls
   93  yum remove postgres
   94  yum remove postgresql
   95  yum remove postgresql-erver
   96  yum remove postgresql-server
   97  yum install postgresql-server
   98  ls
   99  su - postgres
  100  sudo postgresql-setup initdb
  101  rm -rf /var/lib/pgsql/9.2/data
  102  sudo postgresql-setup initdb
  103  su - postgres
  104  rm -rf /var/lib/pgsql/data
  105  sudo postgresql-setup initdb
  106  curl http://localhost:8080
  107  curl http://localhost:80
  108  ifconfig
  109  curl http://192.168.122.1
  110  curl http://192.168.122.1:8080
  111  curl http://172.17.0.1:8080
  112  curl http://172.17.0.1
  113  curl 172.17.0.1
  114  ping 172.17.0.1
  115  javac -version
  116  which javac
  117  ping 172.17.0.1
  118  ping 172.17.0.1:8080
  119  exit
  124  locate resources
  125  vi resources/axosoft.properties
  126  ./mvnw install dockerfile:build  > run.log
  127  vi config/application.properties 
  128  ./mvnw install dockerfile:build  > run.log
  129  ./mvnw install springboot
  130  ./mvnw install dockerfile:run -Dmvn.skip.test=true
  131  ./mvnw install spring-boot:run -Dmvn.skip.test=true
  132  vi config/application.properties 
  133  ./mvnw install spring-boot:run
  134  vi config/application.properties 
  135  ./mvnw install spring-boot:run
  140  iptables -A INPUT -p tcp --dport 4200 -j ACCEPT 
  141  iptables -L -v
  142  psql
  143  su - postgres
  147  ./mvnw install spring-boot:build
  148  ./mvnw install spring-boot:package
  150  ./mvnw clean package
  157  chmod +x target/metrics-0.0.1-SNAPSHOT.jar
  158  ls -l target/metrics-0.0.1-SNAPSHOT.jar
  159  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  160  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  161  pwd
  162  vi /etc/systemd/system/metricsportal.service
  163  systemctl start metricsportal.service
  164  systemctl enable metricsportal.service
  165  systemctl start metricsportal.service
  166  systemctl status metricsportal.service
  167  systemctl status metricsportal.service -l
  168  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  169  systemctl start metricsportal.service
  170  systemctl status metricsportal.service -l
  171  ls
  172  rm -rf metrics-0.0.1-SNAPSHOT.jar 
  173  ls
  174  ls - l target
  175  ls -l target/metrics-0.0.1-SNAPSHOT.jar
  176  systemctl status metricsportal.service -l
  177  mkdir /var/metricsportal
  178  cp target/metrics-0.0.1-SNAPSHOT.jar
  179  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  180  vi /etc/systemd/system/metricsportal.service
  181  systemctl start metricsportal.service
  182  systemctl daemon-reload
  183  systemctl start metricsportal.service
  184  systemctl status metricsportal.service -l
  185  vi /etc/systemd/system/metricsportal.service
  186  systemctl daemon-reload
  187  systemctl start metricsportal.service
  188  systemctl status metricsportal.service -l
  189  cat pom.xml | more
  190  ./mvnw clean package
  191  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  192  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  193  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  194  vi /etc/systemd/system/metricsportal.service
  195  systemctl daemon-reload
  196  systemctl start metricsportal.service
  197  systemctl status metricsportal.service -l
  198  systemctl start metricsportal.service
  199  systemctl status metricsportal.service -l
  200  cat config.properties
  201  cat config\application.properties
  202  cat metrics\config\application.properties
  203  pwd
  204  cat config/application.properties 
  205  vi config/application.properties 
  206  systemctl stop metricsportal.service
  207  ./mvnw clean package
  208  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  209  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  210  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  211  systemctl start metricsportal.service
  212  systemctl status metricsportal.service
  213  vi config/application.properties 
  214  systemctl stop metricsportal.service
  215  ./mvnw clean package
  216  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  217  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  218  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  219  systemctl start metricsportal.service
  220  vi pom.xml
  224  vi config\application.properties
  225  vi config/application.properties
  226  ./mvnw clean package
  227  ls
  228  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  229  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  230  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  231  /var/metricsportal/metrics-0.0.1-SNAPSHOT.jar 
  232  pwd
  233  ls
  234  cd src
  235  ls
  236  cd..
  237  cd ..
  238  cd src/main/
  239  ls
  240  ls java/com/cisco/caa/
  241  ls java/com/cisco/caa/metrics/
  242  vi java/com/cisco/caa/metrics/MetricsApplication.java 
  243  cd ..
  244  svn update
  245  svn commit
  246  svn commit -m 'Portal Changes in Cent os 7'
  247  vi java/com/cisco/caa/metrics/MetricsApplication.java
  248  vi src/main/java/com/cisco/caa/metrics/MetricsApplication.java
  249  ./mvnw clean package
  250  vi src/main/java/com/cisco/caa/metrics/MetricsApplication.java
  251  systemctl stop metricsportal.service
  252  ./mvnw clean package
  253  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  254  sudo chmod 500 target/metri
  255  rm -rf /var/metricsportal/
  256  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  257  mkdir /var/metricsportal
  258  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  259  target/metrics-0.0.1-SNAPSHOT.jar 
  260  vi src/main/java/com/cisco/caa/metrics/MetricsApplication.java
  261  target/metrics-0.0.1-SNAPSHOT.jar 
  262  ./mvnw run
  263  ./mvnw spring-boot run
  264  ./mvnw install sprint-boot:run
  265  ./mvnw install spring-boot:run
  266  svn update 
  267  ./mvnw install spring-boot:run
  268  ./mvnw clearn install spring-boot:run
  269  ./mvnw clean install spring-boot:run
  270  ./mvnw install spring-boot:run
  271  svn update 
  272  ./mvnw clean install spring-boot:run
  273  cd ~/.m2
  274  ls
  275  cd repository/
  276  ls
  277  cd com
  278  ls
  279  cd cisco/caa/
  280  ls
  281  rm -rf axosoft-api/
  282  exit
  283  pwd
  284  cd springboot/spring-1.5.9.RELEASE/metrics/metrics
  285  ./mvnw clean install spring-boot:run
  286  mvn validate
  287  ./mvnw clean validate install spring-boot:run
  288  ./mvnw clean install
  289  ./mvnw clean validate install spring-boot:run
  290  ./mvnw clean install spring-boot:run
  291  systemctl stop metricsportal.service
  292  ./mvnw clean package
  293  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  294  sudo chmod 500 target/metrics-0.0.1-SNAPSHOT.jar
  295  rm -rf /var/metricsportal/
  296  mkdir /var/metricsportal/
  297  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  298  /var/metricsportal/metrics-0.0.1-SNAPSHOT.jar
  299  systemctl start metricsportal.service
  300  systemctl status metricsportal.service
  301  systemctl stop metricsportal.service
  302  ./mvnw clean package
  303  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  304  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  305  rm -rf /var/metricsportal/
  306  mkdir /var/metricsportal/
  307  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  308  systemctl start metricsportal.service
  309  systemctl status metricsportal.service
  310  systemctl status metricsportal.service -l
  311  systemctl stop metricsportal.service
  312  ./mvnw clean package
  313  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  314  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  315  rm -rf /var/metricsportal/
  316  mkdir /var/metricsportal/
  317  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  318  systemctl start metricsportal.service
  319  systemctl status metricsportal.service
  320  systemctl status metricsportal.service -l
  321  vi /etc/systemd/system/metricsportal.service 
  322  wq!
  323  systemctl status metricsportal.service -l
  324  systemctl stop metricsportal.service
  325  systemctl status metricsportal.service
  326  ls
  327  ./mvnw install sprint-boot:run
  328  ./mvnw install spring-boot:run
  329  svn update
  330  ./mvnw install spring-boot:run
  331  svn update
  332  ./mvnw install spring-boot:run
  333  svn update
  334  ./mvnw install spring-boot:run
  335  svn update
  336  ./mvnw install spring-boot:run
  337  svn update
  338  ./mvnw install spring-boot:run
  339  passwd
  340  exit
  341  pwd
  342  cd /root/springboot/spring-1.5.9.RELEASE/metrics/metrics/resources
  343  ./mvnw install spring-boot:run
  344  cd ..
  345  ./mvnw install spring-boot:run
  346  svn update
  347  ./mvnw install spring-boot:run
  348  svn update
  349  ./mvnw install spring-boot:run
  350  sudo vi /var/lib/pgsql/data/pg_hba.conf
  351  cat /var/lib/pgsql/data/pg_hba.conf
  352   vi /var/lib/pgsql/data/pg_hba.conf
  353  sudo systemctl start postgresql
  354  su - postgres
  355  ls
  356  cd springboot/spring-1.5.9.RELEASE/metrics/metrics/
  357  vi config/application.properties 
  358  su - postgres 
  359  docker run -p 80:80 -p 50000:50000 jenkins/jenkins
  360  firewall-cmd --add-service=http
  361  curl http://127.0.0.1:8080
  362  curl http://127.0.0.1:8080/
  363  wget http://127.0.0.1:8080/
  364  wget http://127.0.0.1:8080/api/engineers
  365  iptables
  366  iptables --list
  367  iptables -A INPUT -p tcp --dport 8080 -j ACCEPT 
  368  service iptables save 
  369  service iptables restart
  370  ping 127.0.0.1:8080
  371  ping --help
  372  ping -c 5 127.0.0.1 8080
  373  netstat -an  | grep 8080
  374  netstat -an 
  375  telnet 10.126.245.173 
  376  netstat -an  | grep tomcat
  377  netstat -an  | more
  378  netstat -an  | grep mvnw
  379  iptables -L
  380  iptables -P INPUT ACCEPT
  381  iptables -L -v
  382  iptables -A INPUT -p tcp --dport 22 -j ACCEPT
  383  /sbin/service iptables save
  384  systemctl iptables save
  385  iptables -L -v
  386  iptables -A INPUT -p tcp --dport 8080 -j ACCEPT
  387  iptables -L -v
  388  iptables -A INPUT -p tcp --dport 8090 -j ACCEPT
  389  iptables -L -v
  390  ls
  391  cd WebContent
  392  ls
  393  cat package.json
  394  q!
  395  ls
  396  cd ..
  397  ls
  398  cd ..
  399  ls
  400  svn checkout https://wwwin-svn-sjc.cisco.com/eng/onplus/prototype/metrics/metrics-ui/
  401  ls
  402  sudo useradd meticsportal
  403  sudo password meticsportal
  404  sudo passwd meticsportal
  405  git
  406  npm
  407  yum install nodejs
  408  npm
  409  ls
  410  cd metrics-ui
  411  npm install
  412  npm start
  413  su - postgres
  414  ls
  415  cd springboot/spring-1.5.9.RELEASE/metrics/metrics
  416  ./mvnw install spring-boot:run
  417  cd springboot/spring-1.5.9.RELEASE/metrics/metrics
  418  svn update
  419  ./mvnw install spring-boot:run
  420  systemctl stop metricsportal.service
  421  systemctl status metricsportal.service
  422  ./mvnw clean package
  423  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  424  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  425  rm -rf /var/metricsportal/
  426  mkdir /var/metricsportal/
  427  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  428  systemctl start metricsportal.service
  429  systemctl status metricsportal.service
  430  su - postgres
  431  sudo yum install docker-ce
  432  sudo yum install -y yum-utils device-mapper-persistent-data lvm2
  433  su - postgresql
  434  psql
  435  su - postgres
  436  ls
  437  systemctl stop metricsportal.service
  438  systemctl status metricsportal.service
  439  cd /root/springboot/spring-1.5.9.RELEASE/metrics/metrics
  440  svn update
  441  ./mvnw clean package
  442  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  443  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  444  rm -rf /var/metricsportal/
  445  mkdir /var/metricsportal/
  446  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  447  systemctl start metricsportal.service
  448  systemctl status metricsportal.service
  449  ./mvnw clean package
  450  ./mvnw validate
  451  ./mvnw clean package
  452  vi config/application.properties 
  453  su - postgres
  454  systemctl start postgres
  455  systemctl start postgresql
  456  ./mvnw clean package
  457  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  458  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  459  rm -rf /var/metricsportal/
  460  mkdir /var/metricsportal/
  461  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  462  systemctl start metricsportal.service
  463  systemctl status metricsportal.service
  464  systemctl stop metricsportal.service
  465  systemctl status metricsportal.service
  466  ./mvnw install spring-boot:run
  467  svn update
  468  ./mvnw install spring-boot:run
  469  svn update
  470  ./mvnw install spring-boot:run
  471  svn update
  472  ./mvnw install spring-boot:run
  473  ls
  474  cat src/main/java/com/cisco/caa/controller/EngineerController.java 
  475  svn update
  476  ./mvnw install spring-boot:run
  477  svn update
  478  ./mvnw install spring-boot:run
  479  gcj
  480  gcc
  481  sudo yum install gcj
  482  sudo yum install libgcj
  483  wget http://li.nux.ro/download/nux/dextop/el7/x86_64//libgcj-4.8.2-16.el7.i686.rpm
  484  systemctl status metricsportal.service
  485  systemctl stop metricsportal.service
  486  systemctl status metricsportal.service
  487  systemctl stop metricsportal.service
  488  systemctl status metricsportal.service
  489  cd /root/springboot/spring-1.5.9.RELEASE/metrics/metrics
  490  svn update
  491  ./mvnw clean package
  492  sudo chown meticsportal:meticsportal target/metrics-0.0.1-SNAPSHOT.jar
  493  sudo chmod 777 target/metrics-0.0.1-SNAPSHOT.jar
  494  rm -rf /var/metricsportal/
  495  mkdir /var/metricsportal/
  496  cp target/metrics-0.0.1-SNAPSHOT.jar /var/metricsportal/
  497  systemctl start metricsportal.service
  498  systemctl status metricsportal.service
  499  systemctl start metricsportal.service
  500  systemctl status metricsportal.service
  501  pwd
  502  cd springboot/spring-1.5.9.RELEASE/metrics/metrics-ui
  503  pwd
  504  vi /etc/systemd/system/metrics-ui.service
  505  journalctl -u metrics-ui.service
  506  vi /etc/systemd/system/metrics-ui.service
  507  which npm
  508  vi /etc/systemd/system/metrics-ui.service
  509  systemctl status metricsportal.service
  510  systemctl start metrics-ui.service
  511  systemctl status metrics-ui.service
  512  systemctl status metricsportal.service
  513  systemctl status metrics-ui.service
  514  journalctl -u metrics-ui.service
  515  mkdir /var/www/metrics-ui
  516  cd /var/www/metrics-ui
  517  pwd
  518  svn
  519  svn checkout https://wwwin-svn-sjc.cisco.com/eng/onplus/prototype/metrics/metrics-ui
  520  svnpwd
  521  pwd
  522  ls
  523  cd metrics-ui/
  524  pwd
  525  which npm
  526  vi /etc/systemd/system/metrics-ui.service
  527  systemctl start metrics-ui.service
  528  systemctl daemon-reload
  529  systemctl start metrics-ui.service
  530  systemctl status metrics-ui.service
  531  journalctl -u metrics-ui.service
  532  vi /etc/systemd/system/metrics-ui.service
  533  systemctl daemon-reload
  534  systemctl status metrics-ui.service
  535  systemctl start metrics-ui.service
  536  systemctl status metrics-ui.service
  537  systemctl start metrics-ui.service
  538  systemctl status metrics-ui.service
  539  journalctl -u metrics-ui.service
  540  pwd
  541  npm start
  542   npm install
  543  npm start
  544  cd /\root
  545  cd springboot/spring-1.5.9.RELEASE/metrics/metrics-ui
  546  vi angular-cli
  547  vi src/angular-cli.json 
  548  vi package.json 
  549  npm start
  550  systemctl start metrics-ui.service
  551  systemctl status metrics-ui.service
  552  vi /var/www/metrics-ui/metrics-ui/package.json
  553  systemctl stop metrics-ui.service
  554  systemctl status metrics-ui.service
  555  systemctl start metrics-ui.service
  556  cd /var/www/metrics-ui/metrics-ui
  557  which genisoimage
  558  mvn
  559  sudo yum install mvn
  560  maven
  561  sudo yum install maven
  562  ls
  563  cd /home/cisco/
  564  ls
  565  cd desktopscanner/CiscoActiveAdvisorDesktopScanner/
  566  ls
  567  svn update
  568  ls
  569  mvn clean
  570  mvn install
  571  ls
  572  pwd
  573  mkdir dna-workspace
  574  cd dna-workspace
  575  npm -g install @cisco-dna/dpm --registry http://engci-maven-master.cisco.com/artifactory/api/npm/apic-em-npm-group/
  576  dpm create myPlugin && cd myPlugin && dpm start
  577  git clone https://sansanth@sjc-apl-grt28.cisco.com:8081/platform_ui && (cd platform_ui && curl -kLo `git rev-parse --git-dir`/hooks/commit-msg https://sansanth@sjc-apl-grt28.cisco.com:8081/tools/hooks/commit-msg; chmod +x `git rev-parse --git-dir`/hooks/commit-msg)
  578  ls
  579  cd platform_ui/
  580  ls
  581  cd ui
  582  ls
  583  cd source/
  584  ls
  585  cd ..
  586  ls
  587  cd ..
  588  ls
  589  cd ..
  590  ls
  591  cd platform_ui/
  592  ls
  593  cd ui && dev-env-setup && dev-start
  594  ls
  595  ./dev-env-setup 
  596  ./dev-start
  597  history
  598  cd /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/
  599  svn update
  600  mvn clean install
  601  mvn generate-resources
  602  ls
  603  /usr/bin/genisoimage -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '
  604  pwd
  605  -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '/home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/Cisco_Active_Advisor_Desktop_Scanner_Mac.dmg' /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/ 
  606  /usr/bin/genisoimage -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '/home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/Cisco_Active_Advisor_Desktop_Scanner_Mac.dmg' /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/
  607  /usr/bin/genisoimage -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '/home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/Cisco_Active_Advisor_Desktop_Scanner_Mac.dmg' /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir
  608  ls /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/
  609  ls /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/
  610  ls
  611  pwd
  612  cd ~
  613  wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u-b27/jdk-8u152-linux-x64.rpm"
  614  wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u60-b27/jdk-8u60-linux-x64.rpm"
  615  wget --no-cookies --no-check-certificate --header "Cookie: gpw_e24=http%3A%2F%2Fwww.oracle.com%2F; oraclelicense=accept-securebackup-cookie" "http://download.oracle.com/otn-pub/java/jdk/8u151-b12/e758a0de34e24606bca991d704f6dcbf/jdk-8u151-linux-x64.rpm"
  616  sudo yum localinstall jdk-8u151-linux-x64.rpm 
  617  java -version
  618  ls
  619  cd /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/
  620  mvn install
  621  java -version
  622  ls -l /usr/bin/java
  623  ls -l /etc/alternatives/java
  624  ls /usr/java/jdk1.8.0_151/jre/bin/java
  625  ln /etc/alternative/java /usr/java/jdk1.8.0_151/jre/bin/java
  626  ls
  627  ln
  628  ln /usr/bin/java /usr/java/jdk1.8.0_151/jre/bin/java
  629  ln  /usr/java/jdk1.8.0_151/jre/bin/java /etc/alternatives/java
  630  rm -rf /etc/alternatives/java
  631  ln  /usr/java/jdk1.8.0_151/jre/bin/java /etc/alternatives/java
  632  java -version
  633  sudo yum uninstall openjdk
  634  sudo yum remove openjdk
  635  sudo yum remove java
  636  mvn install
  637  /usr/bin/genisoimage -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '/home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir/Cisco_Active_Advisor_Desktop_Scanner_Mac.dmg' /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir
  638  /usr/bin/genisoimage -V 'CiscoActiveAdvisor' -D -R -apple -no-pad -o '/home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/Cisco_Active_Advisor_Desktop_Scanner_Mac.dmg' /home/cisco/desktopscanner/CiscoActiveAdvisorDesktopScanner/target/dist/mac/dmgdir
  639  ls target
  640  ls
  641  cd dna-workspace/
  642  ls
  643  cd myPlugin/platform_ui/ui
  644  ./dev-start
  645  ls
  646  cd /home/cisco/
  647  ls
  648  cd /root/springboot/spring-1.5.9.RELEASE//metrics/metrics-ui
  649  systemctl stop metrics-ui.service
  650  systemctl status metrics-ui.service
  651  svn update
  652  systemctl start metrics-ui.service
  653  systemctl status metrics-ui.service
  654  systemctl status metrics-ui.service -l
  655  history
  656  vi vi /etc/systemd/system/dna-platform-ui.servi
  657  vi  /etc/systemd/system/dna-platform-ui.service
  658  systemctl start dna-platform-ui.servic
  659  systemctl start dna-platform-ui.service
  660  systemctl status dna-platform-ui.service
  661  /home/cisco/dna-workspace/myPlugin/platform-ui/ui/dev-start
  662  ls /home/cisco
  663  ls /root/dna-workspace/myPlugin/platform_ui/ui
  664  vi  /etc/systemd/system/dna-platform-ui.service
  665  systemctl start dna-platform-ui.service
  666  systemctl daemon-reload
  667  systemctl start dna-platform-ui.service
  668  vi  /etc/systemd/system/dna-platform-ui.service
  669  systemctl daemon-reload
  670  systemctl start dna-platform-ui.service
  671  systemctl status dna-platform-ui.service
  672  /root/dna-workspace/myPlugin/platform_ui/ui/dev-start 
  673  vi  /etc/systemd/system/dna-platform-ui.service
  674  cd \home\cisco
  675  cd /home/cisco
  676  mkdir dna-worksspace
  677  cd dna-worksspace/
  678  pwd
  679  cd /home/cisco
  680  ls
  681  systemctl start dna-platform-ui.service
  682  systemctl status dna-platform-ui.service
  683  ls
  684  cd dna-worksspace/
  685  git clone https://sansanth@sjc-apl-grt28.cisco.com:8081/a/platform_ui
  686  git clone https://sansanth@sjc-apl-grt28.cisco.com:8081/platform_ui && (cd platform_ui && curl -kLo `git rev-parse --git-dir`/hooks/commit-msg https://sansanth@sjc-apl-grt28.cisco.com:8081/tools/hooks/commit-msg; chmod +x `git rev-parse --git-dir`/hooks/commit-msg)
  687  cd ui
  688  cd platform_ui/ui
  689  ./dev-env-setup 
  690  ./dev-start
  691  cd /var/lib/metrics-ui
  692  cd /var
  693  ls
  694  cd www
  695  cd metrics-ui/
  696  ls
  697  cd metrics-ui/
  698  ls
  699  svn update
  700  systemctrl stop metrics-ui.service
  701  systemctl stop metrics-ui.service
  702  systemctl start metrics-ui.service
  703  systemctl status metrics-ui.service
  704  systemctl status metrics-ui.service -l
  705  vi package.json
  706  systemctl status metrics-ui.service -l
  707  ls
  708  svn update
  709  systemctl status metrics-ui.service -l
  710  curl http://localhost:4200
  711  curl http://localhost:4200/dashboard
  712  curl http://localhost:4200/
  713  curl http://localhost:4200/engineers
  714  curl http://localhost:4200/projects
  715  curl http://localhost:4200/metrics/projects
  716  curl http://localhost:4200/api/dashboard
  717  curl http://localhost:4200/api/fetch/null/2018-01-01/2018-03-01
  718  curl http://localhost:4200/api/fetch/commits/null/2018-01-01/2018-03-01
  719  curl http://localhost:4200/dashboard
  720  curl http://localhost:4200/engineers
  721  exit
  722  cd springboot/spring-1.5.9.RELEASE/metrics/metrics-ui/
  723  ls
  724  cd src/
  725  ls
  726  vi index.html
  727  ls
  728  cd app
  729  ls
  730  vi app-routing.module.ts 
  731  exit
  732  pwd
  733  ls
  734  cd springboot/spring-1.5.9.RELEASE/
  735  ls
  736  cd metrics/metrics
  737  ls
  738  systemctl stop metricsportal.service
  739  #./mvnw clean springboot:run
  740  ./mvnw clean springboot:run
  741  history
  742  history | more
  743  #./mvnw clean springboot:run
  744  ./mvnw install dockerfile:build 
  745  history | more
  746  ./mvnw install spring-boot:run
  747  su - postgres
  748  systemctl stop metrics-ui.service
  749  systemctl status metrics-ui.service
  750  cd /var/www/metrics-ui/metrics-ui
  751  svn update
  752  systemctl start metrics-ui.service
  753  systemctl status metrics-ui.service
  754  systemctl status metrics-ui.service -l
  755  systemctl status metrics-ui.service
  756  systemctl status metrics-ui.service -l
  757  systemctl status metrics-ui.service
  758  systemctl status metrics-ui.service -l
  759  systemctl status metrics-ui.service -l 
  760  ls
  761  vi package.json
  762  vi ./config/proxy.conf.json
  763  systemctl status metrics-ui.service -l 
  764  systemctl stop metrics-ui.service
  765  systemctl start metrics-ui.service
  766  systemctl status metrics-ui.service -l 
  767  ls
  768  systemctl stop metrics-ui.service
  769  npm start
  770  npm install
  771  npm start
  772  ls
  773  pwd
  774  cd /root/springboot/spring-1.5.9.RELEASE/
  775  ls
  776  cd metrics/metrics-ui/
  777  ls
  778  npm start
  779  svn update
  780  npm start
  781  ls
  782  cd ..
  783  ls
  784  rm metrics-ui
  785  rm -rf metrics-ui
  786  svn checkout https://wwwin-svn-sjc.cisco.com/eng/onplus/prototype/metrics/metrics-ui
  787  ls
  788  cd metrics
  789  cd ..
  790  cd metrics-ui/
  791  ls
  792  npm install
  793  npm start
  794  vi package.json
  795  npm start
  796  su - postgresql
  797  psql metricsdb;
  798  su - postgres
  799  genisoimage
  800  ls
  801  cd springboot/
  802  ls
  803  cd ..
  804  ls
  805  cd dna-workspace/
  806  ls
  807  cd ..
  808  rm -rf dna-workspace/
  809  ls
  810  mkdir scanner-workspace
  811  cd scanner-workspace/
  812  svn checkout https://wwwin-svn-sjc.cisco.com/eng/onplus/services/trunk/CiscoActiveAdvisorDesktopScanner/
  813  mvn
  814  ls
  815  cd CiscoActiveAdvisorDesktopScanner/
  816  ls
  817  mvn install -f mac_pom.xml 
  818  yum install openjfx
  819  mvn install -f mac_pom.xml 
  820  yum install mvn
  821  yum install maven
  822  mvn install -f mac_pom.xml 
  823  ls
  824  rm jdk-8u151-linux-x64.rpm 
  825  ls
  826  find java
  827  find  -r java
  828  find R java
  829  find --help
  830  y
  831  cd /
  832  find java
  833  find . java
  834  java
  835  rm /usr/bin/java
  836  update-alternatives --config java
  837  ls
  838  chmod a+x jdk-8u151-linux-x64.rpm 
  839  ls
  840  java
  841  update-alternatives --config java
  842  ln /etc/alternatives/java /usr/bin/java
  843  update-alternatives --config java
  844  java
  845  which java
  846  ls
  847  java
  848  which libjli.so
  849  cd /usr/local
  850  ls
  851  cd bin
  852  ls
  853  cd /etc/alternatives
  854  ls
  855  cd jre_1.8.0
  856  ls
  857  cd lib
  858  cd amd64/
  859  ls
  860  chmod a+x *
  861  java
  862  cd ..
  863  ls
  864  cd //
  865  cd ..
  866  ls
  867  cd /etc/alternatives/java
  868  cd /etc/alternatives
  869  ls
  870  ls -l java
  871  cd java
  872  ls
  873  rm -rf jre_1.8.0
  874  ls
  875  jav
  876  java
  877  ls
  878  rm -rf jre_1.7.0
  879  ls
  880    
  881  rm -rf java_sdk_1.8.0
  882  ls
  883  java
  884  ls -l java
  885  update-alternatives --config java
  886  cd jre
  887  ls
  888  cd lib
  889  ls
  890  cd security/
  891  ls
  892  cd ..
  893  c
  894  ls
  895  cd ..
  896  ls
  897  cd ..
  898  ls -lf
  899  rm java
  900  ls
  901  rm /usr/bin/java
  902  java
  903  update-alternatives --config java
  904  pwd
  905  cd jre_1.8.0_openjdk
  906  ls
  907  cd bin
  908  ls
  909  pwd
  910  yum remove java
  911  yum install java
  912  yum install maven
  913  yum install mavenjavajava
  914  yum install maven
  915  ls
  916  java
  917  javac
  918  ls
  919  cd ..
  920  ls
  921  cd ..
  922  ls
  923  ls -l
  924  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64
  925  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/lib
  926  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/lib/amd
  927  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/lib/amd64
  928  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/lib/amd64/jli
  929  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/bin
  930  ls  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/bin/java java
  931  java
  932  cd /usr/bin/jvm
  933  ls /usr/lib/jvm
  934  rm -rf /usr/lib/jvm/java-1.7.0-openjdk-1.7.0.161-2.6.12.0.el7_4.x86_64/
  935  ls /usr/lib/jvm
  936  rm -rf /usr/lib/jvm/java-1.7.0-openjdk
  937  rm -rf /usr/lib/jvm/java
  938  java
  939  ls java
  940  ls java/java
  941  ls -l java/
  942  ls -l java
  943  cd java
  944  ls -l java
  945  cd ..
  946  cd alternatives
  947  ls
  948  ls -l java
  949  java
  950  cd /usr/bin/jvm
  951  cd /usr/lib/jvm
  952  ls
  953  rm -rf *
  954  ls
  955  cd ..
  956  ls
  957  cd /etc/alternatives/java
  958  cd /etc/alternatives/
  959  ls-l
  960  ls -l
  961  rm -rf /usr/share/man/man1/extcheck-java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64.1.gz
  962  rm -rf  /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64/bin/wsimport
  963  ls -l
  964  rm -rf  /usr/share/man/man1/*-java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64.1.gz
  965  ls -l
  966   rm -rf /usr/lib/jvm-exports/java-1.8.0-openjdk-1.8.0.151-5.b12.el7_4.x86_64
  967  ls -l
  968  yum remove java
  969  yum install java
  970  yum install java-devel
  971  java
  972  javac
  973  . /etc/profile
  974  javac
  975  echo $PATH
  976  env | grep -i java
  977  JAVA_HOME=/usr/lib/java
  978  ls
  979  javac
  980  which -a javac
  981  java -version
  982  which -a java
  983  ls /usr/lib/java
  984  ls /usr/lib/
  985  ls /usr/lib/jvm
  986  ls /usr/lib/jvm/java
  987  ls /usr/lib/jvm/java/lib
  988  ls
  989  ls /usr/lib/jvm/java/lib/amd64
  990  ls /usr/lib/jvm/java/lib/amd64/jli
  991  LD_LIBRARY_PATH=/usr/lib/jvm/java/lib/amd64/jli java
  992  ls /usr/lib/jvm/java/lib


