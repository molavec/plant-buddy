# Plant Buddy Client

Code with client front interface

## Test
```bash
yarn start
```

## Build
```bash
yarn build
```

## Deploy

Configure your ssh keys and your `.ssh\config` file 

```bash
Host plantbuddy
  HostName 192.168.1.104
  User angel
  ForwardAgent no
  IdentityFile ~/.ssh/id_rsa
```

then
```bash
yarn deploy
```

## Test build code in docker NGINX

It is posible test client build code with docker
```bash
yarn build
docker-compose up -d
```
then open browser in `https://localhost:3000`

