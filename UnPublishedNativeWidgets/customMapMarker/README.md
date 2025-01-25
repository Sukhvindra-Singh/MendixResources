## CustomMapMarker
[My widget description]

## Features
[feature highlights]

## Usage
[step by step instructions]

## Demo project
[link to sandbox]

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]




Invariant Violation: Tried to register two views with the same name AIRMapMarker


<!-- {selectedMarker === item.Name && (
                                <View style={styles.DashboardCard}>
                                    <View style={{ height: 120 }}>
                                        <Image source={{ uri: uri }} style={{ height: 80, width: 150, resizeMode: 'contain' }} />
                                    </View>
                                    <View style={styles.CardContentContainer}>
                                        <View>
                                            <Text style={{ fontSize: 16, fontWeight: "bold", color: 'black' }}>CarName</Text>
                                        </View>
                                        <View style={{ display: "flex", flexDirection: "row", gap: 15, width: "100%", alignItems: "center", marginVertical: 5 }}>
                                            <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#a49bbc', marginRight: 7 }}></View>
                                            <Text style={{ fontSize: 12, fontWeight: "bold", color: 'grey' }}>CarType</Text>
                                        </View>
                                        <View style={styles.CardBadgeContainer}>
                                            <View style={styles.DashboardBadge}>
                                                <Image source={{ uri: uri }} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
                                                <Text style={{ fontSize: 12, fontWeight: "bold", color: 'black' }}>Seats</Text>
                                            </View>
                                            <View style={styles.DashboardBadge}>
                                                <Image source={{ uri: uri }} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
                                                <Text style={{ fontSize: 10, fontWeight: "bold", color: 'black' }}>Transmission</Text>
                                            </View>
                                            <View style={styles.DashboardBadge}>
                                                <Image source={{ uri: uri }} style={{ height: 10, width: 10, resizeMode: 'contain' }} />
                                                <Text style={{ fontSize: 10, fontWeight: "bold", color: 'black' }}>Doors</Text>
                                            </View>
                                        </View>
                                    </View>
                                    <View>
                                        <View>
                                            <Text style={{ fontSize: 14, fontWeight: "bold", color: "black" }}>Price</Text>
                                        </View>
                                        <View style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                            <TouchableOpacity style={{ backgroundColor: '#a49bbc', padding: 10, borderRadius: 10, width: "100%", marginVertical: 3 }}>
                                                <Text style={{ fontSize: 16, fontWeight: "bold", color: 'white', textAlign: "center" }}>Book Now</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                </View>
                            )} -->