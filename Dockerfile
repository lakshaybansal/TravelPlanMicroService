FROM node:argon

# Create app directory
RUN mkdir -p /usr/src/travel-plan-microservice
WORKDIR /usr/src/travel-plan-microservice

# Install app dependencies
COPY package.json /usr/src/travel-plan-microservice
RUN npm install

# Bundle app source
COPY . /usr/src/travel-plan-microservice

CMD [ "node", "app.js" ]
		
