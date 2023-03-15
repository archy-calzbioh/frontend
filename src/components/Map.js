import React from "react";
import { GoogleMap, useLoadScript } from '@react-google-maps/api'



const Home = () => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBA3_wIWr7GME5kLqbp4gua65hAIdoTgDg"
    })

    if (!isLoaded) return <div>Loading...</div>

    return (
        <Map />
    );
}

const Map = () => {

    return (
        <GoogleMap zoom={10} center={{ lat: 30, lng: -118 }} mapContainerClassName="map-container" >

        </GoogleMap >
    )

}

export default Home;





