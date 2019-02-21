/*
var googleMapUrl = "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=";
var types = "geocode"
var key = "AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ";
//jalandhar&types=geocode&key=AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ"
function autocomplete(address) {
    $.ajax({
            crossOrigin: true,
            type: 'GET',
            url: googleMapUrl + address + "&types=" + types + "&key=" + key,
            xhrFields: {
                withCredentials: true
            },
            dataType: 'jsonp',
            cache: false,
        })
        .done(function(data) {
            console.log(data);
        })
}
//autoCompleteMapLocation.js
$(document).ready(function() {

    $('#locationBox').keyup(function() {
        var address = $('#locationBox').val();
        console.log(address);
        autocomplete(address);
    })
})
*/
// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var placeSearch, autocomplete;
var componentForm = {
    street_number: 'short_name',
    route: 'long_name',
    locality: 'long_name',
    administrative_area_level_1: 'short_name',
    country: 'long_name',
    postal_code: 'short_name'
};

function initAutocomplete() {
    // Create the autocomplete object, restricting the search to geographical
    // location types.
    autocomplete = new google.maps.places.Autocomplete(
        /** @type {!HTMLInputElement} */
        (document.getElementById('locationBox')), { types: ['geocode'] });


}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}