FROM node:14
WORKDIR /app
COPY . .
RUN npm install -g npm@latest
CMD ["npm", "start"]

