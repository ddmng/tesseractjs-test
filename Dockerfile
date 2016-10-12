FROM node:latest
RUN npm install tesseract.js walk
ADD tes.js /tes/
WORKDIR /tes
VOLUME /tes/files
CMD node tes.js
