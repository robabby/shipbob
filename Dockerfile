FROM node:carbon

ENV NODE_ENV production

RUN ["mkdir", "-p", "/usr/src/app"]

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:3000 || exit 1

EXPOSE 3000

CMD [ "npm", "start" ]
