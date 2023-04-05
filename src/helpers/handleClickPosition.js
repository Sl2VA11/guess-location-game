export const handleClickPosition = (clickedPosition, isLocationInCountry, country) => {
  console.log(clickedPosition);

  isLocationInCountry(clickedPosition.lat, clickedPosition.lng, country).then(
    (result) => console.log(`Is the location in ${country}? ${result}`)
  );
};
