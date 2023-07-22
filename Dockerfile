
from node:latest
workdir /WFDProject
copy . ./
run npm install
run npm i bootstrap-icons
expose 3000
entrypoint npm run dev
