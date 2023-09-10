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