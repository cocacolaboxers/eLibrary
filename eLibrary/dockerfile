# Final stage
FROM node:12.13.1

ENV NODE_ENV develop

WORKDIR /eLibrary

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]