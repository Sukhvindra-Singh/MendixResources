import { ReactElement, createElement, useEffect, useState, useRef } from "react";
import { TextStyle, ViewStyle, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Big from "big.js";
import { Style, mergeNativeStyles } from "@mendix/pluggable-widgets-tools";
import { LocationPickerProps } from "../typings/LocationPickerProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
    MapContainer: ViewStyle;
}

export const defaultStyle: CustomStyle = {
    container: {
        flex: 1
    },
    MapContainer: {
        flex: 1
    },
    label: {
        color: "black"
    }
};

export function LocationPicker({
    style,
    lat,
    long,
    OnChange,
    mapFunctionType
}: LocationPickerProps<CustomStyle>): ReactElement {
    const styles = mergeNativeStyles(defaultStyle, style);
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 25.276987,
        longitude: 55.296249
    });
    
    // Create a reference to the MapView
    const mapRef = useRef<MapView>(null);

    const handleMapPress = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        if (latitude && longitude) {
            if (lat.formatter.type === "number") {
                lat.setValue(new Big(latitude.toFixed(6)));
            } else {
                lat.setValue(latitude.toString());
            }
            if (long.formatter.type === "number") {
                long.setValue(new Big(longitude.toFixed(6)));
            } else {
                long.setValue(longitude.toString());
            }
        }
        setMarkerPosition({ latitude, longitude });
        focusMapOnMarker(latitude, longitude); // Focus the map on the marker
        if (OnChange && OnChange.canExecute) {
            OnChange.execute();
        }
    };

    const handleMarkerDragEnd = (event: any) => {
        const { latitude, longitude } = event.nativeEvent.coordinate;
        if (latitude && longitude) {
            if (lat.formatter.type === "number") {
                lat.setValue(new Big(latitude.toFixed(6)));
            } else {
                lat.setValue(latitude.toString());
            }
            if (long.formatter.type === "number") {
                long.setValue(new Big(longitude.toFixed(6)));
            } else {
                long.setValue(longitude.toString());
            }
        }
        setMarkerPosition({ latitude, longitude });
        focusMapOnMarker(latitude, longitude); // Focus the map on the marker
        if (OnChange && OnChange.canExecute) {
            OnChange.execute();
        }
    };

    const focusMapOnMarker = (latitude: number, longitude: number) => {
        if (mapRef.current) {
            mapRef.current.animateToRegion({
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });
        }
    };

    useEffect(() => {
        if (lat.status === "available" && long.status === "available") {
            const newLat = parseFloat(lat?.displayValue) || 25.276987;
            const newLong = parseFloat(long?.displayValue) || 55.296249;
            setMarkerPosition({
                latitude: newLat,
                longitude: newLong
            });
            focusMapOnMarker(newLat, newLong); // Focus on the marker when lat/long changes
        }
    }, [lat, long]);

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef} // Assign the reference
                style={styles.MapContainer}
                initialRegion={{
                    latitude: markerPosition.latitude,
                    longitude: markerPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
                zoomControlEnabled={true}
                zoomEnabled={true}
                minZoomLevel={3}
                maxZoomLevel={20}
                onPress={mapFunctionType === "show" ? undefined : handleMapPress}
            >
                <Marker
                    coordinate={markerPosition}
                    draggable
                    onDragEnd={handleMarkerDragEnd}
                />
            </MapView>
        </View>
    );
}
