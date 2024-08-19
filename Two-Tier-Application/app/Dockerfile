FROM node:14

WORKDIR Two-Tier-Application/app

# Copy backend package files to the backend directory

COPY Two-Tier-Application/app/backend/package*.json backend/

# Install backend dependencies
WORKDIR Two-Tier-Application/app/backend
RUN npm install

# Copy the rest of the backend code
COPY Two-Tier-Application/app/backend ./

# Copy the frontend code to its own directory
COPY Two-Tier-Application/app/frontend frontend/

# Expose the necessary port
EXPOSE 3000

# Start the backend server
CMD ["node", "backend/index.js"]
