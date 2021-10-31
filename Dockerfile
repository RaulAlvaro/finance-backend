FROM node:14.17.0
 
WORKDIR /app
 
RUN npm install
 
COPY . .
 
EXPOSE 3000

CMD ["nodemon", "src/index.js"]