import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, CircleMarker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const position = [16.0741, 108.150]; // Thay đổi tọa độ tùy ý

  return (
    <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <CircleMarker center={position} radius={8} fillColor="blue" fillOpacity={1}>
        <Popup>
          Trường Đại học Bách Khoa, Đại học Đà Nẵng
        </Popup>
      </CircleMarker>
    </MapContainer>
  );
};

export default Map;
