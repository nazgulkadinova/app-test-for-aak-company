FROM node:14
WORKDIR /app
COPY server.js /app
EXPOSE 3000
CMD ["node", "server.js"]