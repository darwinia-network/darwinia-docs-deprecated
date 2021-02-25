FROM node:14 as builder

WORKDIR /src
COPY . .

RUN cd website && yarn install && yarn build

FROM nginx:mainline-alpine

COPY ./nginx-http.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /src/website/build /usr/share/nginx/html
