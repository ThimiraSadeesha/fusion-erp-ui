# Stage 1: Build the Angular app
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the entire project and build the Angular app
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine AS production

# Copy built Angular files from the build stage to Nginx's HTML directory
COPY --from=build /app/dist/fusion-erp-ui/browser /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
