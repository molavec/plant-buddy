# Plant Buddy API

Data API to connect with data and functions with Plant Buddy Device.


## Install dependencies
```bash
yarn start
```
**Note:** Use same node version as Raspberry


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


## Start in production
In Plant Buddy device run it in production mode
```bash
NODE_ENV=production node /opt/plant-buddy-api/build/bin/www
```

