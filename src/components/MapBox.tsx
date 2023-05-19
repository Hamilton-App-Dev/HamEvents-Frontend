import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

interface MapProps {
  initialLocation: string;
}
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dka3MiLCJhIjoiY2xhYnNpdzJyMDJ6dzQyb21nMjUzaGV5MiJ9.WBCbtLcZ96zudbiMRfidcA';

const Map: React.FC<MapProps> = ({ initialLocation }) => {
  const [location, setLocation] = useState(initialLocation);
  useEffect(() => {
    setLocation(initialLocation);
    const handleMapRender = async () => {
      try {
        const map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-75.408450, 43.051670], // Coordinates of the location to mark
          zoom: 12
        });

        const marker = new mapboxgl.Marker({
          color: "#black",
          draggable: true
          }).setLngLat([-75.408450, 43.051670])
          .addTo(map);
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    window.onload = handleMapRender;

    return () => {
      window.onload = null;
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '200px' }}></div>;

};

export default Map;



/* import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import geocoding  from '@mapbox/mapbox-sdk/services/geocoding';
interface MapProps {
    initialLocation: string;
  }
  
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2dka3MiLCJhIjoiY2xhYnNpdzJyMDJ6dzQyb21nMjUzaGV5MiJ9.WBCbtLcZ96zudbiMRfidcA';
const geocodingClient = geocoding({ accessToken: mapboxgl.accessToken });
const Map: React.FC<MapProps> = ({ initialLocation }) => {
    const [location, setLocation] = useState(initialLocation);
    const [map, setMap] = useState<mapboxgl.Map | null>(null);
  
    useEffect(() => {
      setLocation(initialLocation);
    }, [initialLocation]);
  
    const handleMapRender = async () => {
      if (!location) return;
  
      try {
        const response = await geocodingClient.forwardGeocode({
          query: location,
          limit: 1,
          // bbox: [ -75.2537, 43.0673, -75.2017, 43.1073]
        }).send();
  
        const match = response.body;
        if (match && match.features && match.features.length > 0) {
          const { center } = match.features[0];
          const lng = center[0];
          const lat = center[1];
  
          if (!map) {

            const newMap = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v11',
              center: [-75.408450, 43.051670],
              zoom: 12
            });
            setMap(newMap);
            const marker = new mapboxgl.Marker({
              color: "#black",
              draggable: true
              }).setLngLat([-75.408450, 43.051670])
              .addTo(newMap);
          } else {
            map.flyTo({
              center: [-75.3789, 43.051670],
              essential: true
            });
          }
        } else {
            console.log("Not found")
        }
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };
    window.onload = handleMapRender;

    return (
      <div>
        <div id="map" style={{ width: '100%', height: '300px' }} />
      </div>
    );
  };
  
  export default Map; */