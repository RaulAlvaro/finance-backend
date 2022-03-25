FROM node:14.17.0
 
WORKDIR /usr/src/app
 
COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app
 
CMD ["npm", "run", "dev"]

EXPOSE 3000