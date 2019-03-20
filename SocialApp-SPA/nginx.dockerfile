FROM nginx:alpine
LABEL author="Junaid Malik"
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf

