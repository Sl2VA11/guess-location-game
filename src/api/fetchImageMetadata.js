import axios from "axios";
import { accessToken } from "../helpers/map/accessToken";

// export async function fetchImageMetadata(imageId) {
//   try {
//     const response = await axios.get(
//       `https://graph.mapillary.com/${imageId}?fields=id,captured_at,thumb_1024_url,geometry&access_token=${accessToken}`
//     );
//     console.log(response);
//     // You can now access the image metadata in response.data
//     // For example, you can get the image location using response.data.geometry.coordinates
//   } catch (error) {
//     console.error("Error fetching image metadata:", error);
//   }
// }



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
    console.log(country);
    return country.toLowerCase() === targetCountry.toLowerCase();
  } catch (error) {
    console.error("Error reverse geocoding:", error);
    return false;
  }
}

// Example usage:
// const coordinates = [12.4924, 41.8902]; // [longitude, latitude]
// const targetCountry = "Italy";

// isLocationInCountry(coordinates[1], coordinates[0], targetCountry).then(
//   (result) => console.log(`Is the location in ${targetCountry}? ${result}`)
// );
