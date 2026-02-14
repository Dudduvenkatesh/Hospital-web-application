FROM ubuntu:latest

WORKDIR /app

RUN apt update -y

RUN apt install apache2 -y

COPY . /var/www/index.html

EXPOSE 80

ENTRYPOINT ["apachectl", "-D", "FOREGROUND"]
