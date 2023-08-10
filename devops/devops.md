### Resources
- https://javascript.plainenglish.io/deploy-a-react-app-to-aws-s3-with-github-actions-a-step-by-step-guide-3572265332a3?utm_campaign=deploy-a-react-app-to-s3-with-github-act


### Docker tips
- http://blog.arungupta.me/9-docker-recipes-javaee-applications-techtip80/
- http://blog.arungupta.me/deploy-javaee-docker-swarm-cluster/
- https://www.simb.co/angular-cli-using-docker/
- https://developer.okta.com/blog/2017/04/17/angular-authentication-with-oidc
- https://developer.okta.com/blog/2017/04/26/bootiful-development-with-spring-boot-and-angular
- https://jsfiddle.net/Thiruvikraman/h74vy71t/
- https://jeremylong.github.io/DependencyCheck/dependency-check-maven/index.html
- https://dzone.com/refcardz/intro-to-docker-monitoring?fromrel=true


### Apache Kafka

1. Apache Kafka is a Distributed, Replicated Messaging Queue. It functions like a commit log.

2. It is completely open source and you can download it directly. But to use it, you need to create an Apache Kafka cluster. Because running Apache Kafka on just one system won’t work in a distributed environment.

3. A cluster of Apache Kafka contains multiple servers. Each server is called a broker and stores the data. But where is the data stored? Apache Kafka makes use of secondary storage for storing the data. A lot of people have apprehensions about hard disks being slower than the main memory. You can make this access faster by writing and reading from sequential memory locations rather than random locations. This is how Kafka stores data. How is this access sequential ? We will see below.

4. Regarding storage in Kafka, you’ll always hear two terms - Partition and Topic. Partitions are the units of storage in Kafka for messages. And Topic can be thought of as being a container in which these partitions lie.

5. Whenever you create a topic in Kafka, it creates the directories equal to the number of partitions you have specified - One directory for one partition of the topic. In Kafka, the topic is more of a logical grouping than anything else, and that the Partition is the actual unit of storage in Kafka. That is what is physically stored on the disk.

6. Each partition is further subdivided into segments. Each segment is a log file containing the incoming messages. Each message which is stored in the log file contains the actual message along with the offset(number of messages in the file + 1) at which it occurs.

7. The messages as they come are written sequentially in one of the partitions for that topic.Each partition can be consumed by only one consumer ay a time.(this is a kafka requirement).

8. A common operation in Kafka is to read the message at a particular offset. How will you find this offset? Scanning the log file ? But, it will take a lot of time. This is where the index file comes to help which stores the physical address for each offset.

9. Kafka does not always access disk sequentially but it does some things that make it much more likely that disk access is often sequential. All Kafka messages are stored in larger segment files and since Kafka messages are not deleted when consumed (like in other message brokers) Kafka will not end up creating a fragmented filesystem over time by continuously creating and deleting many variable length files.

10. Instead it creates segment files and then appends them to that file until it reaches 1GB(configurable). When all messages in the segment expire, it deletes the entire segment.

### AWS
AWS Glue Basic Concept!!!

AWS S3 service is used to store data over cloud but we do not have any schema/metadata stored along with data.

Metadata/schema is required by other services as well like AWS Athena, Lambda. In order to keep the metadata separately in catalog, AWS provides Glue service for this.

we have some of the basic components mentioned below.

Crawler: It helps us to crawl over data stored in S3 and get the schema/metadata out it.

Classifier: Classifiers are triggered during a crawl task. A classifier checks whether a given file is in a format it can handle. If it is, the classifier creates a schema in the form of a StructType object that matches that data format.
You can use the standard classifiers that AWS Glue provides, or you can write your own classifiers to best categorize your data sources and specify the appropriate schemas to use for them. A classifier can be a grok classifier, an XML classifier, a JSON classifier, or a custom CSV classifier, as specified in one of the fields in the Classifier object.

Tables: It stores the metadata which we got through crawler

Jobs: Through job we can create a automated process to convert to any other file format for ex:-CSV to parquet. This is the one example

Triggers: Triggers helps us in identify any new data coming up in S3 bucket and based on the it will automatically trigger the lambda function to do the processing

Glue Studio: AWS Glue Studio is a new graphical interface that makes it easy to create, run, and monitor extract, transform, and load (ETL) jobs in AWS Glue. You can visually compose data transformation workflows and seamlessly run them on AWS Glue’s Apache Spark-based server less ETL engine. You can inspect the schema and data results in each step of the job.
