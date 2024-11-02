# Stage 1: Build
FROM node:20-alpine AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Production
FROM nginx:alpine AS production

COPY --from=build /app/dist/lumiraq-test /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80


CMD ["nginx", "-g", "daemon off;"]
