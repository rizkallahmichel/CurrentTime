# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Expose port 8080 (required for Cloud Run)
EXPOSE 8080

# Start the server
CMD ["node", "index.js"]
