Description
This course is designed to introduce you to developing on the AWS cloud computing platform while 
simultaneously preparing you for the AWS Certified Developer - Associate (DVA-C01) certification exam. 
From AWS beginners to AWS Developers looking to prepare for the exam, and IT professionals looking 
to migrate to the cloud, this course is for you.
This course covers official DVA-C01 exam objectives, with a review of the AWS Cloud essentials on Day 
1. Further topics include Serverless Application design, In-Memory Caching, AWS SDKs, Continuous 
Integration / Continuous Deployment (CI/CD), and all other topics that you can expect to see on the 
exam. The content is spread out over five 4-hour days.
The course also includes live demonstrations. Before attending the course, if you don’t already have 
one, please make sure you sign up for a free Amazon Web Services account at https://aws.amazon.com/
Day 1
• Introduction to Developing on AWS
o Course Introduction
o AWS Certified Developer Associate Exam overview
o Cloud Economics and Total Cost of Ownership (TCO)
• AWS Cloud Essentials
o AWS Identity and Access Management
o AWS Storage, Compute, and Networking
▪ Demonstration
o AWS Database Options
▪ Demonstration
o AWS Elasticity and Management Tools
▪ Demonstration
Day 2
• Interacting with the AWS Cloud
o AWS CLI
▪ Demonstration
o AWS SDKs
o AWS APIs
• AWS Storage Services
o EC2 Instance Stores
o Amazon CloudFront
▪ Demonstration
o EBS Volumes
o Amazon S3
Day 2
• AWS Database Services
o Relational Databases 
o Nonrelational Databases
o In-Memory Caching
▪ Demonstration
• Infrastructure as Code
o YAML and JSON templates
o CloudFormation Stacks
▪ Demonstration
o Advanced CloudFormation concepts
Day 3
• AWS ElasticBeanstalk
o Installing the ELB CLI
o Deploy an ElasticBeanstalk environment and application
▪ Demonstration
o ElasticBeanstalk Deployment concepts
• Continuous Integration / Continuous Deployment (CI/CD)
o CodeCommit
▪ Demonstration
o CodePipeline
o CodeBuild
Day 4
• Containerized Applications
o OpsWorks
o AWS Elastic Container Service (ECS)
▪ Demonstration
o AWS Elastic Container Repository (ECR)
▪ Demonstration
• Application Integration and Microservices
o SQS
o SNS
o Kinesis
Day 5
• Serverless Applications on AWS
o Serverless Application Model (SAM)
o Lambda and DynamoDB
▪ Demonstration
o API Gateway
▪ Demonstration
• Application Monitoring and Management
o AWS CloudWatch, AWS X-Ray, AWS CloudTrail
▪ Demonstration
o Encryption
Instructor Bio
Share some background information about yourself. Include anything that will affirm your position as an 
authority on the subject.



### AWS Cloud Watch
AWS CloudWatch
• Core AWS monitoring tool for resources and applications
• Display metrics and create alarms from those resources
• Integrate with SNS for email notifications
• Does not aggregate data across regions
• Integrated with EC2 auto-scaling
• Used to reduce mean time between failure (MTBF) and mean time to resolution (MTTR)
• Offers a global, customizable Dashboard that you can use to monitor resources in one 
single view 
AWS CloudWatch Concepts
• Namespaces are containers for CloudWatch metrics
• No default namespace
• AWS/service naming convention
• Metrics are time-ordered data points sent to CloudWatch
• Region-specific
• 15 month life
• Metric math allows you to query multiple metrics and use math expressions to 
create new time series based on them
• Note: CloudWatch doesn’t collect memory usage and disk space utilization by 
default until you install the CloudWatch agent in the instances
AWS CloudWatch Concepts
• Alarms
• Tracks a single metric over a specified period of time and based on the metric value, will perform 
a specific action
• Alarm States:
• OK: Metric or expression is within the defined threshold
• ALARM: Metric or expression is outside the defined threshold
• INSUFFICIENT_DATA: Metric not available, or not enough data. Usually at start of the alarm 
AWS CloudWatch Alarm Creation
• When you create an alarm you specific the following settings:
• Period: Length of time to evaluate the metric. Expressed in seconds
• Evaluation Period: Number of most recent data points to evaluate 
• Datapoints to Alarm: Number of data points within evaluation period that must be breached to 
caused the alarm to sound. Do not have to be consecutive, just within the last number of data 
points in the evaluation period
AWS CloudWatch Logs
▪ Applications send logs to CloudWatch using SDK
▪ CloudWatch collects log from:
• Elastic Beanstalk
• ECS
• Lambda
• VPC Flow Logs
• API Gateway
• CloudTrail based on filter
• CloudWatch log agents
• Route53
AWS CloudWatch Logs
• CloudWatch logs can go to 
• Batch exporter for retrieval from S3
• Stream to ElasticSearch cluster for analytics
• Logs Storage Architecture
• Log groups: Arbitrary name, representing app
• Log stream: Instances within application / log files / containers
• Can define log expiration policies
• Encryption of logs using KMS at the Group Level
AWS CloudWatch Metrics
• Custom High Resolution Metrics
• Publish via AWS CLI or API
• Granularity at one second (1 minute for standard resolution metrics)
• Much more immediate insight
AWS CloudWatch Metrics
• Custom High Resolution Metrics
• Publish via AWS CLI or API
• Granularity at one second (1 minute for standard resolution metrics)
• Much more immediate insight
AWS CloudWatch Knowledge Check
Q: A mission-critical application is required to have a monitoring system 
which can provide immediate insight into its sub-minute activity. You are 
required to collect the data of all of the users who are currently logged in 
to the system every 10 seconds.
Which of the following options is the MOST suitable solution that you 
should do to meet the above requirements?
A) Enable enhanced monitoring
B) Publish a high-end resolution custom metric in CloudWatch
C) Enable detailed monitoring
D) Publish custom metrics using X-Ray
AWS X-Ray
• Used to analyze and debug applications, specifically those deployed in a decoupled 
architecture 
• Can be used to 
• Identify performance bottlenecks
• Pinpoint specific service issues
• Identify errors 
• Identify impact to users
• X-Ray integrates with AWS SDK and will add traces to track the application requests 
• Easily integrate other AWS services with AWS X-ray (Lambda, API Gateway, ELB, EB)
• Uses trace data to generate a detailed service graph
AWS X-Ray
• Distributed tracing of microservices
• Visual analysis of our applications
• Allows us to trace end to end and follow requests
• Each component adds its own “trace”
• Tracing is made of segments (+ sub segments)
• Annotations can be added to traces to provide extra-information
• Ability to Trace
• Every request
• Sample Request (As a % for example of rate per minute)
AWS X-Ray Components
• Segments: 
• Each application /service will send them. When a segment is reported to X-Ray, a trace ID is reported
• SubSegments: 
• Data from a particular service. Trace ID is reported with a segment. 
• Traces
• Segments collected together to form an end to end trace. This is the full request from the client, to your 
system, all the way to the backend. Trace ID is passed through the AWS services
• Sampling:
• Is used to decrease the amount of requests sent to X-Ray to reduce cost
• Annotations
• Key value pairs used to index traces and use with filters
AWS X-Ray Advantages
• Troubleshooting performance
• Understand dependencies in a microservice architecture
• Pinpoint service issues
• Review Request behavior
• Find errors and expectations
• SLA?
• Where am I throttled?
• Identify users that are impacted
AWS X-Ray SDK
• The X-Ray SDK provides:
• Interceptors are added to your code to trace incoming HTTP requests
• Client handlers to instrument AWS SDK clients that your application will use to call other AWS 
services
• HTTP client is added to call other internal and external HTTP web services
• Supports applications in Node.js, Java, and .NET
• SDK sends JSON segment documents to an X-Ray daemon that is listening for UDP traffic
• The X-Ray daemon buffers segments in a queue and uploads them to X-Ray in batches
• Enabled in Elastic Beanstalk by including the xray-daemon.config configuration file in the 
.ebextensions directory of your source code
AWS X-Ray Compatibility
• Lambda
• Elastic Beanstalk
• ECS
• ELB
• API Gateway
• EC2 or On-Premise server
AWS X-Ray (How do we enable?)
• Your code (Java, Python, Go, Node.js, .NET) must import the AWS X-Ray SDK
• Very little code modification
• The application SDK will capture
• Calls to AWS services
• HTTP/HTTPS requests
• Database Calls (MySQL, PostgreSQL, DynamoDB)
• Queue calls (SQS)
AWS X-Ray (How do we enable?)
• Install the X-Ray daemon or enable X-Ray AWS Integration
• X-Ray daemon works as a low level UDP packet interceptor 
• AWS Lambda or other AWS services already run the X-Ray daemon for you (To run 
on Lambda, ensure X-Ray is imported into Code)
• Each application must have IAM rights to write to X-Ray
AWS X-Ray Exam Tips
• X-Ray on EC2 / On-Premise
• Linux must run X-Ray daemon
• IAM instance if ec2, other AWS Credentials for On-Premise
• X-Ray on Lambda
• Make sure X-Ray integration is ticked 
• IAM role is lambda role
• X-Ray on Beanstalk
• Set configuration in EB console
• Or use EB extension (.ebextensions/xray-daemon-config)
• X-Ray on ECS / EKS / Fargate (Docker)
• Create Docker image that runs the Daemon or use office X-Ray Docker image
• Ensure port mappings and network settings are correct and proper IAM
AWS X-Ray Knowledge Check
Q: A new IT policy requires you to trace all calls that your Node.js application sends to 
external HTTP web APIs as well as SQL database queries. You have to instrument your 
application, which is hosted in Elastic Beanstalk, in order to properly trace the calls via the XRay console.
What should you do to comply with the given requirement?
A) Use a user data script to run the daemon automatically
B) Create a Docker image that runs the X-Ray daemon
C) Enable X-Ray daemoin by including the xray-daemon.config file in the .ebextensions 
directory of your source code
D) Enable active tracing in Elastic Beanstalk Console
AWS CloudTrail
• API auditing service
• All actions taken by a user, role or service in the console, CLI, SDK, or APIs are recorded as 
events
Management events Data events Global service events
AWS CloudTrail Trails
• CloudTrail Trails are created to archive, analyze and respond to changes in AWS resources
• Types of Trails:
• A trail that applies to all regions. This is the default trail when using console
• A trail that applies to one region. This is the default trail when using CLI or API
• Organizational trail will log events for all AWS accounts in an AWS Organization
• CloudTrail event log files are encrypted using S3 SSE. You can use AWS KMS
• Can implement SNS notifications
• Can define S3 lifecycle rules to archive or delete log files
• CloudTrail publishes log files every five minutes
AWS CloudTrail vs CloudWatch vs X-Ray
• CloudTrail
• Audit API calls made by users / services / console
• Useful to detect unauthorized calls or root causes of changes
• CloudWatch
• CloudWatch metrics over time for monitoring
• CloudWatch Logs for storing application log
• CloudWatch Alarms to send notifications
• X-Ray
• Automated Trace Analysis and Central Service Map Visualization
• Latency, errors, and Fault analysis
• Request tracking across distributed systems
Infrastructure as Code
• Helps remove dependency
• Human intervention
• Deploy infrastructure
• Declarative template syntax
AWS CloudFormation
• Provisioning and managing
• Cloud resources
• Human readable
• Machine consumable
• AWS CloudFormation
• Template
• Creating, updating, and deleting resources
AWS CloudFormation
Benefits of Infrastructure as Code
Security
Scalability
Stability
Transactional
Visibility
• Infrastructure resources in cloud environment
• Common language
• Simple text file
• Model and provision
• Automated and secure
• Regions and accounts
• Available at no additional charge
AWS CloudFormation
AWS CloudFormation
Repeatable
Versionable
• Scalable web application
• Back-end database
• Auto scaling group
• Elastic load balancer
• Create or modify existing template
• Create stack
AWS CloudFormation
Replicate infrastructure
• Additional availability
• Multiple regions
• Reuse template
• Consistently and repeatedly
AWS CloudFormation
• Control and track changes
• Upgrade incrementally
• Roll back infrastructure
• Original settings
• Version control system
• Templates
AWS CloudFormation
AWS CloudFormation Concepts
Stacks
Change sets
Templates
• Collection of resources
• Template
• Modifications
• Affect resources
• Create, update, delete
AWS CloudFormation Stacks
Changes to resources
• Summary of proposed changes
• View impact of changes
• Before implementing them
AWS CloudFormation Change Sets
JSON YAML
AWS CloudFormation Templates
<->
----
/>
101001011
0100101
101001011
0100101
AWS CloudFormation Templates
AWS Template Components
Description
Parameters
Mappings
Metadata
AWS Template Components
Resource
Conditions
Outputs
• IAM user or AWS role
• Invoke a stack action
• iam:PassRole permission
• Service role
• Create, update, or delete actions
• Specify conditions
• Control policies
AWS CloudFormation Permissions
AWS::Include Transform
• Import template snippets
• Amazon S3 buckets
AWS::Serverless Transform
• Convert AWS SAM templates
• AWS CloudFormation
AWS CloudFormation Transforms
<->
Fn::Base64 Fn::Join
Fn::Cidr Fn::Select
Fn::FindInMap Fn::Split
Fn::GetAtt Fn::Sub
Fn::GetAZs Ref
AWS CloudFormation Intrinsic Functions
Condition Functions
FN::AND
FN::EQUALS
FN::IF
FN::NOT
FN::OR
AWS CloudFormation Intrinsic Functions
• Graphical interface
• Design and deploy templates
• Web-based
• Drag-and-drop 
• Keeps track
• Resource positions
• Relationships
• Metadata information
AWS CloudFormation Designer
AWS CloudFormation Knowledge Check
Q: What resource(s) can you manage via AWS CloudFormation?
A. Amazon VPC
B. API Gateway
C. Amazon Alexa
D. Elastic Beanstalk
E. AWS Lambda
F. DeepRacer
• Platform as a Service (PaaS)
• Deploy and manage your applications without worry about the underlying infrastructure
• Elastic Beanstalk does capacity provisioning, scaling
• Supports the following languages:
• Go
• Java
• .Net
• Node.js
• PHP
• Python
• Ruby
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk
• Supports web containers:
• Tomcat
• Passenger
• Puma
• Supports Docker containers
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Workflow
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
Create 
Application
Zip and Upload 
Version
Launch 
Application 
Environment
Manage 
Application 
Environment 
Deploy new version
Update version
• How do we create our environment in our application source code?
• YAML formatted environment manifest in root of application source bundle
• Configures environment name, solution stack, and links to use when creating 
environment
• env.yaml
AWS Elastic Beanstalk
AWS Elastic Beanstalk env.yml
• Elastic Beanstalk Components
• Application
• collection of EB components; Environments, versions, and 
environment configurations 
• Think of it as a folder
• Application Version
• Specific, labeled version of code that makes up your web 
application
• Points to an S3 object that contains the code
• Applications can have many unique versions
• Environment
• Runs only one single applications version at a time
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Deployment Policies
• All at once
• New version is deployed to all instances simultaneously.
• Involves Downtime!! 
• Rolling
• New version is deployed in batches. 
• No downtime but reduced capacity as batches are taken offline and updated
• Rolling with additional batch
• New version is deployed in batches
• New batch is launched first to ensure full capacity
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Deployment Policies
• Immutable
• Deploy to a fresh group of instances by performing an immutable update|
• Traffic Splitting 
• Deploy to a fresh group of instances then split the incoming traffic between the existing application version 
and the new one
• Blue/Green deployments ensure you have two production environments; “blue” and “green”. Once 
software working in green environment and testing is good, you switch the router so all requests go to the 
green environment and now the blue one stays idle. Makes for minimal downtime; Easy rollback
• Canary deployments is similar to blue-green but less risky; uses a phased approach to roll out to all users
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Deployment Policies
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Command Line Interface (EB 
CLI)
• Interactive commands for creating, updating, and 
monitoring your application
• Used as an alternative to the Elastic Beanstalk 
console
• Can be installed via:
• EB CLI setup scripts from GitHub
AWS Elastic Beanstalk
Instructor video will 
appear here during live 
session. Delete this 
placeholder before 
presenting
• Elastic Beanstalk Command Line Interface (EB CLI)
• eb init: Initialize your EB CLI repository
• eb create: Creates the environment and deploys the application
• eb open: Can now open website after application is deployed
• eb health: Returns recent health of environment 
• eb logs: Enable or disable log streaming to CloudWatch logs
• eb deploy: Deploys application source bundle from initialized project directory
• eb terminate: Terminates the running environment 
AWS Elastic Beanstalk CLI
AWS Elastic Beanstalk Exam Tips
• Beanstalk with HTTPS
• Load SSL certificate on the Load Balancer
• Can be done from Console
• Can be done from code .ebextensions/securelistener-alb.config
• Must be provisioned using ACM or CLI
• Must open port 443
• Beanstalk Redirect HTTP to HTTPS
• Configure instances to redirect HTTP to HTTPS
• Or configure ALB with a rule
AWS Elastic Beanstalk Exam Tips
• RDS with Elastic Beanstalk
• RDS can be provisioned with Beanstalk for dev or test
• Not good for prod as db lifecycle is tied to Beanstalk environment lifecycle
• Best for prod is to separately create an RDS database and provide 
ElasticBeanstalk application with connection string. 
• To migrate from coupled RDS to standalone RDS
• Take RDS DB snapshot
• Enable deletion protection in RDS
• Create new environment without RDS, point to existing old RDS
• Perform blue/green deployment and swap new and old environments
• Terminate old. RDS wont get deleted because of termination protection 
• Delete CloudFormation stack (will be in DELETE_FAILED)
AWS Elastic Beanstalk Knowledge 
Check
Q: A developer needs to configure the environment name, solution stack, and 
environment links of his application environment which will be hosted in Elastic 
Beanstalk. Which configuration file should the developer add in the source bundle to 
meet the above requirement?
A) env.config
B) cron.yaml
C) Dockerrun.aws.json
D) env.yaml
AWS Elastic Beanstalk Knowledge 
Check
Q: A single docker container environment is hosted in Elastic Beanstalk. Your 
manager instructed you to ensure that the compute resources maintain full capacity 
during deployments to avoid any degradation of the service or possible down time.
Which of the following deployment methods should you use to satisfy the given 
requirement? (Select TWO)
A) Rolling
B) All at Once
C) Canary
D) Immutable
E) Rolling with Additional Batch


