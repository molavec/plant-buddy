# Plant Buddy

Aplicación e infraestrutura necesaria para plant buddy.

## Descripción del proyecto

* **mqtt-sim-device:** Cliente MQTT que genera datos de prueba.
* **pb-mqtt-bridge**: Bridge que comunica al broker con la App y otros servicios.
* **pb-api**: API que comunica el front end con el resto de la app
* **docker-compose.yml**: Servicios dockers necesarios para el Backend de la app.

## How to

Levantar servicios dockers
```bash
docker compose up -d
```

Instalar las dependencias de todos los subproyectos
```bash
yarn install:all
```

Una vez que se haya levantado el servidor postgre inicializar la base de datos
```bash
 yarn init:db
```

Ejecutar `pb-mqtt-bridge`, `pb-api` y `mqtt-sim-device`:

Es posible ejecutar estos 3 servicios con un único comando:

```bash
yarn exec:all
```

o cada uno por separado


```bash
yarn exec:sim-device
# o accediendo a la carpeta
cd pb-mqtt-bridge
yarn dev
``` 

```bash
yarn exec:api
# o accediendo a la carpeta
cd mqtt-sim-device
yarn dev
``` 

```bash
yarn exec:bridge
# o accediendo a la carpeta
cd pb-api
yarn dev
```

Ejecutar el `pb-webapp`:
```bash
yarn exec:webapp
cd pb-webapp
yarn dev
```

Ejecutar **storybook** del `pb-webapp`:
```bash
yarn exec:webapp:storybook
cd pb-webapp
yarn storybook
```

## Servicios Dokers

* **EMQX:** MQTT Broker
* **Timescale:** Base de datos basada en Postgre 
* **pgAdmin:** Cliente Postgre

### EMQX
* Usuario: admin
* Password: public

### Timescale
* server name: plant-buddy-server
* url: timescale.plant-buddy.com
* Usuario: postgres
* Password: timescale

### pgAdmin
* Usuario: admin
* Password: public
  
### Mongo
* User: root 
* Password: example
