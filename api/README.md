# Plant Buddy API

Data API to connect with data and functions with Plant Buddy Device.


## Test
```bash
yarn start
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

## Start in prod
In Plant Buddy device run it
```bash
cd /opt/plant-buddy-api
yarn start:prod
```
