#To Pull the image from remote repository
FROM ubuntu:latest

#Deprecated
MAINTAINER Enforc3r "enforc3r@gmail.com"

RUN apt-get update && apt-get install -y openjdk-11-jdk
#We could have used apt-get update && apt-get upgrade b

#To change the working Directory
WORKDIR /usr/local/bin/

# Adding File from our local machine
ADD TestingDocker.jar . 
# “.” here specifies that we are need to work in current working Dir


# it means that at start up , it will automatically append “java , -jar , TestDocker.jar” .
ENTRYPOINT ["java","-jar","TestingDocker.jar"]


# CMD [“bash”] =  Define a process that will run inside the container once it starts up.

#Different ways of specifying a command = CMD [“command” , “param1”] # Example CMD [“sleep” , “5”]


# If we don’t provide value of sleep then we use CMD [“5”] to set a default value . So basically at start-up command that will get exec will be : “sleep 5
