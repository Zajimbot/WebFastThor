FROM nginx:alpine

# Копируем конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копируем статические файлы
COPY . /usr/share/nginx/html

EXPOSE 80