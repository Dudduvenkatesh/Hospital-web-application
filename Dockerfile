FROM ubuntu:latest

RUN apt update -y && apt install -y git

WORKDIR /app

RUN https://github.com/Dudduvenkatesh/Hospital-web-application.git 

CMD ["bash"]

