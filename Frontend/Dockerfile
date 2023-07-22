FROM node:latest
WORKDIR /FWDProject
COPY . ./
RUN npm install
RUN npm i bootstrap-icons
RUN npm run build
EXPOSE 3000
ENTRYPOINT npm run start
