import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import '2gis-maps';

const Map = ({ onMarkerClick }) => {
  useEffect(() => {
    var map = DG.map('map', {
      center: [54.91, 52.31],
      zoom: 13
    });

    const pointsData = [
      { coordinates: [54.919, 52.319], info: 'Информация о точке 1' }
      // Добавьте другие точки с информацией
    ];

    pointsData.forEach((point) => {
      const marker = DG.marker(point.coordinates);
      marker.on('click', () => {
        onMarkerClick(point);
      });
      marker.addTo(map);
    });

    return () => {
      map.remove();
    };
  }, [onMarkerClick]);

  return <div id="map" style={{ height: '100vh', width: '100vw' }}></div>;
};

export default Map;
