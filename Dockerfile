FROM nginx:1.15

RUN rm -v /etc/nginx/nginx.conf

ADD dockerfiles/nginx.conf /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

ADD dist /var/www/html/

EXPOSE 80
CMD service nginx start
