import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('CHANGE ME');

function App() {
  return (
    <MapboxGL.MapView style={{flex: 1}}>
      <MapboxGL.Camera
        bounds={{
          ne: [-7.939227, 39.594127],
          sw: [-7.953227, 39.584127],
        }}
      />

      <MapboxGL.ShapeSource
        id="source"
        shape={{
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-7.941227, 39.584127],
                [-7.951227, 39.584127],
                [-7.951227, 39.594127],
              ],
            ],
          },
        }}>
        <MapboxGL.FillLayer id="fill" />
      </MapboxGL.ShapeSource>
    </MapboxGL.MapView>
  );
}

export default App;
