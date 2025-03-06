# pull official base image
FROM node:20-slim
WORKDIR /app
ENV NODE_OPTIONS="--max-old-space-size=8192"
COPY package.json ./
RUN npm install
EXPOSE 4071
COPY . .
CMD ["npm", "start"]