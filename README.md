# React_Express_App_Medium_Tutorial
- This repository has the code to support a tutorial that I created on Medium called Create a React FrontEnd, a Node/Express BackEnd and connect them together.
- This repository can also be used as a starting point (boilerplate), if you whant to create your own React/Express app.
.

## Where can I check the tutorial?
You are very welcome to check the tutorial on Medium. Just follow the link below.
- [Create a React FrontEnd, a Node/Express BackEnd and connect them together](https://medium.com/@jrshenrique/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c)

## About the app
Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express).

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## Check if they are connected
1. With the two apps running, open your browser in http://localhost:3000/.
2. If you see a webpage saying `Welcome to React`, it means the FrontEnd is working.
3. If the same webpage has the phrase `API is working properly`, it means the API is working.
4. Enjoy!


## Test client

It is posible test client build code with docker

```bash
cd client
docker-compose up -d
```

Para subir mediante sftp:
```bash 
scp -P 43401 -r build angel@raspberry-plantcord.molavec.com:/home/angel/test 
scp -r build angel@192.168.1.104:/home/angel/test
```
http://www.hypexr.org/linux_scp_help.php

 ffmpeg -v warning  -i flower.mp4 -i /tmp/pallete.png -lavfi "fps=15,scale=400:-1:flags=lanczos [x]; [x][1:v] paletteuse" -y flower.gif


## problema con crash en express
 https://stackoverflow.com/questions/47703165/how-to-log-application-crash-and-system-crash-using-nodejs-and-express
 https://shapeshed.com/uncaught-exceptions-in-node/
 https://blog.heroku.com/best-practices-nodejs-errors


 ## Como levantar la aplicación como un único servicio Express
 https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-
 

 ## Pruebas de desarrollo
 Se utiliza la variable DEV para definir si se utilizan comandos para desarrollo o para producción.
 https://nodejs.dev/learn/nodejs-the-difference-between-development-and-production

 ```javascript
 if (process.env.NODE_ENV === "development") {
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }))
}

if (process.env.NODE_ENV === "production") {
  app.use(express.errorHandler())
}
```

```bash 
NODE_ENV=production node ./bin/www
```


## NGINX

Hay que editar el siguiente archivo
```bash 
sudo vim /etc/nginx/sites-available/default
```

y reiniciar el servicio
```bash
sudo systemctl reload nginx
```

