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

Ejecutar `pb-mqtt-bridge`:
```bash
cd pb-mqtt-bridge
yarn dev
``` 
**Nota**: Esto se podría dockerizar para no tener que levantarlo manualmente

Ejecutar `mqtt-sim-device` (Opcional):
```bash
cd pb-mqtt-bridge
yarn dev
``` 
**Nota**: Esto se podría dockerizar para no tener que levantarlo manualmente
**Nota**: Utilizar mientras no se tenga un dispositivo físico.


(TODO) Ejecutar `pb-api`:
```bash
cd pb-api
yarn dev
```
**Nota**: Aún no está desarrollado
**Nota**: Esto se podría dockerizar para no tener que levantarlo manualmente

(TODO) Ejecutar el `front-end de plant-buddy`:
```bash
yarn dev
```
**Nota**: Aún no está desarrollado


## Servicios Dokers

* **EMQX:** MQTT Broker
* **Timescale:** Base de datos basada en Postgre 
* **pgAdmin:** Cliente Postgre

### EMQX
* Usuario: admin
* Password: public

### Timescale
* url: timescale.plant-buddy.com
* Usuario: postgres
* Password: timescale

### pgAdmin
* Usuario: name@example.com
* Password: timescale
  
### Mongo
* User: root 
* Password: example
