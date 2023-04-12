import axios from "axios";

export async function isLocationInCountry(latitude, longitude, targetCountry) {
  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/reverse",
      {
        params: {
          format: "json",
          lat: latitude,
          lon: longitude,
          zoom: 18,
          addressdetails: 1,
          "accept-language": "en",
        },
      }
    );

    const country = response.data.address.country;
    

    return country.toLowerCase() === targetCountry.toLowerCase();

  } catch (error) {

    console.error("Error reverse geocoding:", error);
    return false;
  }
}
