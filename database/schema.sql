CREATE DATABASE weather_stations_api;

CREATE TABLE stations (
    id INTEGER NOT NULL,
    ws_name TEXT NOT NULL,
    site TEXT NOT NULL,
    portfolio TEXT NOT NULL,
    state TEXT NOT NULL,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL
);

CREATE TABLE variables (
    var_id INTEGER NOT NULL,
    id INTEGER NOT NULL,
    name TEXT NOT NULL,
    unit TEXT NOT NULL,
    long_name TEXT NOT NULL
);
