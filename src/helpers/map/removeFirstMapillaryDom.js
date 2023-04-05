export const removeFirstMapillaryDom = () => {
  const mapillaryDoms = document.querySelectorAll(".mapillary-dom");
   if (mapillaryDoms.length > 1) {
     
    mapillaryDoms[0].remove();
  }
};
