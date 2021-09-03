FROM node:14.17.0
 
WORKDIR /app
 
RUN npm install
 
COPY . .
 
EXPOSE 3000

CMD ["npx", "nodemon", "src/index.js", "--exec", "babel-node" ]