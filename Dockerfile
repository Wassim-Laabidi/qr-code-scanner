# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies, including react-qr-reader@latest
RUN npm install react-qr-reader@latest

# Copy the rest of the application code to the working directory
COPY . .

# Build the React application
RUN npm run build

# Install a simple web server to serve the built files
RUN npm install -g serve

# Set the command to run the web server and serve the built files
CMD ["serve", "-s", "build", "-l", "tcp://0.0.0.0:3000"]

# Expose the port the app will run on
EXPOSE 3000