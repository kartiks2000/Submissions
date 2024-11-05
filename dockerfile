# Use the official Node.js image as a base image
FROM node:22.11.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli@18.2.11

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application for production
RUN ng build

# Install a lightweight web server to serve the static files
RUN npm install -g serve

# Expose the port on which the app will run
EXPOSE 5000

# Command to serve the app
CMD ["serve", "-s", "dist/submissions/browser", "-l", "5001"]
