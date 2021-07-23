import { map } from "jquery";
import { Component } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import PlacesAutocomplete from 'react-places-autocomplete';

const GoogleMapsAPI = 'AIzaSyB5F64Qxoz3mboEFZMKAxUibt4gB1aRM-E';
const YOUR_GOOGLE_MAPS_API_KEY = "AIzaSyByxPfKgJ9mU21CrOTkQwFDC2JGrYtYUcU";
Geocode.setApiKey( GoogleMapsAPI );
Geocode.enableDebug();


class GoogleAutoFill extends Component{
    constructor( props ){
		super( props );
		this.state = { address: '' };
	}

	handleChange = address => {
		this.setState({ address });
	  }

    render(){
        return(
			<div>
				Google Auto Fill
				<div>
				<PlacesAutocomplete
      value={this.state.address}
      onChange={this.handleChange}
      onSelect={this.handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div>
          <input
            {...getInputProps({
              placeholder: 'Search Places ...',
              className: 'location-search-input',
            })}
          />
          <div className="autocomplete-dropdown-container">
            {loading && <div>Loading...</div>}
            {suggestions.map(suggestion => {
              
              // inline style for demonstration purpose
              const style = suggestion.active
                ? { backgroundColor: '#42a5f5', cursor: 'pointer' }
                : { backgroundColor: '#ffffff', cursor: 'pointer' };
              return (
                <div className="input-suggestion"
                  {...getSuggestionItemProps(suggestion, {
                    
                    style,
                  })}
                >
                <i class="material-icons">location_on  </i> <span>{suggestion.description}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </PlacesAutocomplete>
				</div>
			</div>
		);
    }
}
export default GoogleAutoFill;