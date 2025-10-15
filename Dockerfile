FROM nginx:alpine
COPY . /usr/www/nginx/html
EXPOSE 80
CMD ["nginex", "-g", "daemon off;"]