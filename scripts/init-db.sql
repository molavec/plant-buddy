
create table if not exists data_sensors (
  time timestamp with time zone not null,
  device_id uuid not null,
  label text not null,
  value double precision not null
);

SELECT create_hypertable('data_sensors','time');

CREATE INDEX ix_deviceId_time ON data_sensors (device_id, time DESC);