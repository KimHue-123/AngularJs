# Create image based on the official Node 10 image from dockerhub
FROM node:10

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/fe

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/fe

# Copy dependency definitions
COPY package*.json /usr/src/fe

# Install dependecies
RUN npm install
RUN npm install bower -g 
RUN npm install gulp -g
RUN bower install --allow-root
# Get all the code needed to run the app
COPY . /usr/src/fe

# Expose the port the app runs in
EXPOSE 4001

# Serve the app
CMD ["npm", "start"]