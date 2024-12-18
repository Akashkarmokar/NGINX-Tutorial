FROM nginx:1.18.0-alpine

WORKDIR /etc/nginx

COPY nginx.conf.template /etc/nginx/nginx.conf.template

CMD envsubst '$APP_HOST $BACKEND_PORT' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf && \
    nginx -g 'daemon off;'

