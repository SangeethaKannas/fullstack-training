Here's a simple guide to help you quickly understand Dockerfile:

𝟭. 𝗜𝗻𝘁𝗿𝗼𝗱𝘂𝗰𝘁𝗶𝗼𝗻

Dockerfile contains step-by-step commands to create a docker image.

It is easily version-controlled using git and using it we can consistently reproduce the same docker image without losing important steps.

A Dockerfile is a recipe to create a docker image.

𝟮. 𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀 𝗶𝗻 𝗗𝗼𝗰𝗸𝗲𝗿𝗳𝗶𝗹𝗲

✅ 𝙁𝙍𝙊𝙈 <𝙞𝙢𝙖𝙜𝙚-𝙣𝙖𝙢𝙚>:<𝙫𝙚𝙧𝙨𝙞𝙤𝙣>

It's the first line in a Dockerfile, which enables us to use the base image for our custom Docker image.

For example, below we installed the latest Ubuntu as a base image:

𝘍𝘙𝘖𝘔 𝘶𝘣𝘶𝘯𝘵𝘶:𝘭𝘢𝘵𝘦𝘴𝘵

✅ 𝙍𝙐𝙉 <𝙨𝙝𝙚𝙡𝙡-𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨>

Used to execute shell commands into the base image, mainly it's used to install packages, each execution of the RUN command creates a new docker layer over the base image so it needs to be used effectively.

For example, below we've updated our base image with apt-get and installed the nginx image:

𝘙𝘜𝘕 𝘢𝘱𝘵-𝘨𝘦𝘵 𝘶𝘱𝘥𝘢𝘵𝘦 && 𝘢𝘱𝘵-𝘨𝘦𝘵 𝘪𝘯𝘴𝘵𝘢𝘭𝘭 -𝘺 𝘯𝘨𝘪𝘯𝘹

✅ 𝘾𝙊𝙋𝙔 <𝙨𝙤𝙪𝙧𝙘𝙚-𝙡𝙤𝙘𝙖𝙩𝙞𝙤𝙣> <𝙙𝙚𝙨𝙩𝙞𝙣𝙖𝙩𝙞𝙤𝙣-𝙡𝙤𝙘𝙖𝙩𝙞𝙤𝙣>

It transfers files from the host to containers

For example, below we've copied 𝘩𝘦𝘭𝘭𝘰.𝘩𝘵𝘮𝘭 file from host to container with different name 𝘪𝘯𝘥𝘦𝘹.𝘩𝘵𝘮𝘭:

𝘊𝘖𝘗𝘠 ./𝘩𝘦𝘭𝘭𝘰.𝘩𝘵𝘮𝘭 /𝘷𝘢𝘳/𝘸𝘸𝘸/𝘩𝘵𝘮𝘭/𝘪𝘯𝘥𝘦𝘹.𝘩𝘵𝘮𝘭

✅ 𝙀𝙓𝙋𝙊𝙎𝙀 <𝙥𝙤𝙧𝙩-𝙣𝙪𝙢𝙗𝙚𝙧>

It Indicates which port a container will listen on.

For example, below will make a container to list on port 80:

𝘌𝘟𝘗𝘖𝘚𝘌 𝟪𝟢

✅ 𝙀𝙉𝙑 <𝙣𝙖𝙢𝙚> <𝙫𝙖𝙡𝙪𝙚>

Helps to create environment variables into containers.

For example, below will create an environment variable with its value 1.19.0:

𝘌𝘕𝘝 𝘕𝘎𝘐𝘕𝘟_𝘝𝘌𝘙𝘚𝘐𝘖𝘕 𝟣.𝟣𝟫.𝟢

✅ 𝙐𝙎𝙀𝙍 <𝙪𝙨𝙚𝙧𝙣𝙖𝙢𝙚>

It defines, which user to use in the container. By default, it's a root user.

For example, below we've used user johndoe:

𝘜𝘚𝘌𝘙 𝘫𝘰𝘩𝘯𝘥𝘰𝘦

✅ 𝘾𝙈𝘿 <𝙘𝙤𝙢𝙢𝙖𝙣𝙙𝙨>

Use to define commands when the container initializes, ideally, only one CMD is expected but if you define multiple CMD commands the last one will take precedence.

For example, below we're setting the nginx process to run in the foreground on initialization.

𝘊𝘔𝘋 ["𝘯𝘨𝘪𝘯𝘹", "-𝘨", "𝘥𝘢𝘦𝘮𝘰𝘯 𝘰𝘧𝘧;"]

✅ 𝙀𝙉𝙏𝙍𝙔𝙋𝙊𝙄𝙉𝙏 <𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀>

Same as CMD but it is more strict and only one ENTRYPOINT command is allowed in Dockerfile.