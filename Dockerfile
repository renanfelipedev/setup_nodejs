FROM node:17-slim as BUILDER
LABEL maintainer="Renan Felipe"

WORKDIR /usr/src/app

# Instalar dependências
COPY package*.json ./
RUN npm install --production

COPY src ./src

FROM node:17-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3000

CMD ["npm", "start"]
