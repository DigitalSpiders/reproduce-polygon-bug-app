import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken('CHANGE ME');

function App() {
  return (
    <MapboxGL.MapView style={{flex: 1}}>
      <MapboxGL.Camera
        centerCoordinate={[-7.946227, 39.589127]}
        zoomLevel={14}
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
        <MapboxGL.FillLayer id="fill" style={{fillColor: 'blue'}} />
        <MapboxGL.LineLayer
          id="line"
          style={{lineColor: 'red', lineWidth: 2}}
        />
      </MapboxGL.ShapeSource>
    </MapboxGL.MapView>
  );
}

export default App;
