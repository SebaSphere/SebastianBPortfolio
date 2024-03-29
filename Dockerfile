# This needs to be updated
FROM node:14.15.1

ENV NODE_ENV=production
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# Bundle app source
COPY . .
# Port used under /bin/www, forward to whatever port you want with nginx
EXPOSE 3000
CMD [ "node", "bin/www" ]