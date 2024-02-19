const locationData = [
  {
    latitude: 40.7128, // Example latitude for New York City
    longitude: -74.006, // Example longitude for New York City
    location: "New York City",
  },
  {
    latitude: 34.0522, // Example latitude for Los Angeles
    longitude: -118.2437, // Example longitude for Los Angeles
    location: "Los Angeles",
  },
  {
    latitude: 51.5074, // Example latitude for London
    longitude: -0.1278, // Example longitude for London
    location: "London",
  },
  // Add more locations as needed
  {
    latitude: 48.8566, // Example latitude for Paris
    longitude: 2.3522, // Example longitude for Paris
    location: "Paris",
  },
  {
    latitude: 35.6895, // Example latitude for Tokyo
    longitude: 139.6917, // Example longitude for Tokyo
    location: "Tokyo",
  },
  {
    latitude: 37.7749, // Example latitude for San Francisco
    longitude: -122.4194, // Example longitude for San Francisco
    location: "San Francisco",
  },
  {
    latitude: -33.8688, // Example latitude for Sydney
    longitude: 151.2093, // Example longitude for Sydney
    location: "Sydney",
  },
];

export { locationData };

export function getLocationByName(location) {
  if (!location) return null;

  const filtered = locationData.filter((item) => item.location === location);
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      latitude: 0,
      longitude: 0,
      location: "",
    };

    return defaultLocation;
  }
}
