# ------------------------------------------------------
# Builder Image
# ------------------------------------------------------
FROM node:18-alpine as builder

# install and cache app dependencies
COPY package.json yarn.lock ./
RUN yarn install --only=prod&& mkdir /app && mv ./node_modules ./app

WORKDIR /app

COPY . .

RUN yarn run build


# ------------------------------------------------------
# Production Build
# ------------------------------------------------------
FROM nginx:1.23.3-alpine
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]