import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


class Location extends Component {
     render() {
          const style = {
               width: '100%',
               height: '80%'
          }
          return (
               <Map 
                    style={style}
                    initialCenter={{
                    lat: 40.854885,
                    lng: -88.081807
                    }}
                    google={this.props.google} 
                    zoom={5}
               >
 
               <Marker onClick={this.onMarkerClick}
                       name={'Current location'} />
        
               <InfoWindow onClose={this.onInfoWindowClose}>
               </InfoWindow>
             </Map>
          )
     }
}

export default GoogleApiWrapper({
     apiKey: ("AIzaSyAhlV_WuxOjGxgJVl15hEkhh6HvsxZLbDM")
   })(Location)