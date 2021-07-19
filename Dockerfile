FROM node:14-alpine AS builder 
WORKDIR /app 
COPY package.json ./  
RUN yarn install --frozen-lockfile 
COPY . . 
RUN yarn build 
RUN echo $PORT
FROM nginx:1.19-alpine AS server
COPY --from=builder ./app/build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'

