# Use the official Node.js 18 image.
# https://hub.docker.com/_/node
FROM node:18

# Create and change to the app directory.
WORKDIR /usr/src/app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install all dependencies including dev dependencies for testing.
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

RUN rm -rf node_modules
RUN rm package-lock.json
RUN npm install

# Expose the application port
EXPOSE 4200

# Run the web service on container startup.
CMD [ "npm", "start" ]
