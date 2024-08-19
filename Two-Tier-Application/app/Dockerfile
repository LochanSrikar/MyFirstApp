FROM node:14

WORKDIR /app

# Copy backend package files to the backend directory
COPY app/backend/package*.json backend/

# Install backend dependencies
WORKDIR /app/backend
RUN npm install

# Copy the rest of the backend code
COPY app/backend ./

# Copy the frontend code to its own directory
COPY app/frontend frontend/

# Expose the necessary port
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/index.js"]
