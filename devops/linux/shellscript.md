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

    
