import React from "react";

const GoogleMap = ({ place }) => {
  return (
    <div className="mapouter">
      <div className="gmap_canvas mt-3">
        <iframe
          width="500"
          height="400"
          id="gmap_canvas"
          src={`https://maps.google.com/maps?q=${place}fort&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          title="Google Map"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
