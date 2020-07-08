FROM node:14.5

RUN mkdir -p /usr/src/app
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli
COPY . /app

EXPOSE 4200 49153

CMD ng serve --host 0.0.0.0
