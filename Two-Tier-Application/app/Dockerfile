# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the backend code into the container
COPY app/backend/package*.json ./
RUN cd backend && npm install

# Copy the frontend code into the container
COPY app/frontend/ ./

# Copy the backend source code
COPY app/backend/ ./backend/

# Expose the necessary port
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/index.js"]
