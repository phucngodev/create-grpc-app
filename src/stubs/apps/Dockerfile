FROM node:12-alpine

# let k8s handle the daemon
# RUN npm i -g  pm2

WORKDIR nodeapp
ENV NODE_ENV production

COPY package*.json  ./
RUN npm i --no-dev

COPY . .

EXPOSE 50051

CMD ["npm", "run", "prod"]
# CMD ["pm2-runtime", "start", "ecosystem.config.js"]
