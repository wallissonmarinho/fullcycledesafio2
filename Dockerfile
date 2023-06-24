FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

CMD ["npm", "run", "start:prod"]

# WORKDIR /home/node/app
# USER node
# CMD [ "tail", "-f", "/dev/null" ]