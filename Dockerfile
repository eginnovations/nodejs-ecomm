FROM registry.access.redhat.com/ubi8/nodejs-16@sha256:382f3359921567a2e2648f814fd25ff3ba7da8bbf41172ff94aaa9d5bc6214ac
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install --production
COPY . /app

EXPOSE 3000
CMD [ "node", "app.js" ]