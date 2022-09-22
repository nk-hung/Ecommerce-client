import GoogleMapReact from "google-map-react";
import React from "react";

const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

class GoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  render() {
    const { center, zoom }: any = this.props;
    console.log(`center,zoom:`, center, zoom);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "ad" }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text='My Marker' />
        </GoogleMapReact>
      </div>
    );
  }
}

export default GoogleMap;
