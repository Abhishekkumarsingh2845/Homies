
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

const noidaLocation = {
  latitude: 28.62583951050634,
  longitude: 77.37755309671795,
  latitudeDelta:28.62583951050634,
  longitudeDelta: 77.37755309671795,
};

const MapSelect = () => {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.error('Permission error:', err);
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (hasPermission) {
        Geolocation.getCurrentPosition(
          ({coords}) => {
            setLocation({
              latitude: coords.latitude,
              longitude: coords.longitude,
              latitudeDelta: 0.0099,
              longitudeDelta: 0.0421,
            });
          
            setLoading(false);
          },
          error => {
            console.error('Location error:', error);
            // Fallback to Noida if there's an error
            setLocation(noidaLocation);
            setLoading(false);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
      } else {
        alert(
          'Permission to access location was denied. Showing Noida by default.',
        );
        setLocation(noidaLocation);
        setLoading(false);
      }
    };
    fetchLocation();
  }, []);

  // Zoom in by reducing the deltas
  const handleZoomIn = () => {
    if (location) {
      setLocation({
        ...location,
        latitudeDelta: location.latitudeDelta * 0.5,
        longitudeDelta: location.longitudeDelta * 0.5,
      });
    }
  };

  // Zoom out by increasing the deltas
  const handleZoomOut = () => {
    if (location) {
      setLocation({
        ...location,
        latitudeDelta: location.latitudeDelta * 2,
        longitudeDelta: location.longitudeDelta * 2,
      });
    }
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#007BFF" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {location && (
        <>
          <View style={styles.mapContainer}>
            <MapView
              style={StyleSheet.absoluteFillObject}
              region={location}
              mapType="standard"
              showsUserLocation={true}>
              <Marker coordinate={location} title="Location" />
            </MapView>
          </View>

          {/* <View style={styles.zoomContainer}>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomIn}>
              <Text style={styles.zoomText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zoomButton} onPress={handleZoomOut}>
              <Text style={styles.zoomText}>-</Text>
            </TouchableOpacity>
          </View> */}
        </>
      )}
    </View>
  );
};

export default MapSelect;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop:10
  },
  mapContainer: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden', // Ensures the border radius applies properly
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  zoomContainer: {
    position: 'absolute',
    bottom: 50,
    right: 20,
    flexDirection: 'column',
  },
  zoomButton: {
    backgroundColor: '#fff',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
  },
  zoomText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
});
