FROM node:18.12.1-alpine as builder

# 若依赖下载较慢，可切换为阿里源
RUN npm config -g set registry https://registry.npm.taobao.org

WORKDIR /app

COPY package*.json ./
RUN npm ci --verbose

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html