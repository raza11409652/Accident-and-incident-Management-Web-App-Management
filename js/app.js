const dataApiKey = "579b464db66ec23bdd000001ae780dbb3cd94b246776e8023e87a251";
const googleMapApi = "AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ";
const googleZipUrl = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";
var zipCode = "";
var latitudeResponse = [];
var longitudeResponse = [];
const hospitalListUrl = "https://api.data.gov.in/resource/98fa254e-c5f8-4910-a19b-4828939b477d?format=json";

/*
function loadMapPrint(lat, lng, index) {
    var location = { lat: lat, lng: lng };
    var map = new google.maps.Map(document.getElementById('map_' + index), {
        zoom: 8,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
*/


function convertAddressToLat(address) {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ"
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function() {

        },
        success: function(response) {
            // console.log(response);
            for (var i = 0; i < response.results.length; i++) {
                // console.log(response.results[i].geometry.location.lat);
            }
            /*latitudeResponse.push();
            longitudeResponse.push(response.results[0].geometry.location.lng);
            */
            return response.results[0].geometry.location.lat;
        }
    });
}


function convertAddressToLng(address) {
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ"
    $.ajax({
        type: 'GET',
        url: url,
        beforeSend: function() {

        },
        success: function(response) {
            // console.log(response);
            for (var i = 0; i < response.results.length; i++) {
                // console.log(response.results[i].geometry.location.lat);
            }
            /*latitudeResponse.push();
            longitudeResponse.push(response.results[0].geometry.location.lng);
            */
            return response.results[0].geometry.location.lng;
        }
    });
}

function getLocation() {
    function onPositionReceived(position) {
        //console.log(position);
        //  console.log(position.coords.latitude);
        //console.log(position.coords.longitude);

        $.ajax({
            type: 'GET',
            url: googleZipUrl + position.coords.latitude + "," + position.coords.longitude + "&key=" + googleMapApi,
            beforeSend: function() {

            },
            success: function(response) {
                //       console.log(response);
                var length = response.results[0].address_components.length;
                zipCode = response.results[0].address_components[length - 1].long_name;
                console.log(zipCode);
                $('#locationBox').val(response.results[1].formatted_address);
            }
        });
    }

    function locationNotReceived(positionError) {
        console.log(positionError);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onPositionReceived, locationNotReceived);
    }
}

function fecthList(zipcode) {
    var data = "&filters[pincode]=" + zipcode + "&fields=pincode,state,hospital_name," +
        "location,discipline_systems_of_medicine,telephone,tollfree,ambulance_phone_no,specialties,mobile_number,bloodbank_phone_no,location_coordinates" + "&limit=1000";
    $.ajax({
        type: 'GET',
        url: hospitalListUrl + "&api-key=" + dataApiKey + data,
        beforesend: function() {

        },
        success: function(result) {
            console.log(result);
            zipCode = null;
            var telephone = "";
            if (result.count > 0) {
                $('#hopitalList').append(`<div class="row center margin-top-10 margin-bottom-10 border-dark">
    <div class="col-lg-4">Hospital Name</div>
    <div class="col-lg-4">Location</div>
    <div class="col-lg-1"><i class="fa fa-phone"></i></div>
    <div class="col-lg-1"><i class=" fa fa-mobile"></i> </div>
    <div class="col-lg-1"><i class="fa fa-map"></i> </div>
    </div>`);
                var flag = "";
                for (var i = 0; i < result.records.length; i++) {
                    console.log(result.records[i].hospital_name);

                    if (result.records[i].telephone == 0) {
                        telephone = "not found";
                    } else {
                        telephone = result.records[i].telephone;
                    }

                    latitudeResponse[i] = convertAddressToLat(result.records[i].hospital_name + " " + result.records[i].location);
                    longitudeResponse[i] = convertAddressToLng(result.records[i].hospital_name + " " + result.records[i].location);

                    $('#hopitalList').append(`<div class="row">
                        <div class="col-lg-4">` + result.records[i].hospital_name + `</div>
                        <div class="col-lg-4">` + result.records[i].location + `</div>
                        <div class="col-lg-1">` + telephone + `</div>
                        <div class="col-lg-1">` + result.records[i].mobile_number + `</div>
                        <div class="col-lg-1"><button class="btn btn-danger" data-toggle="modal" data-target="#modal_` + i + `">deatails</button></div>
                    </div>
                    <div class="modal fade" id="modal_` + i + `" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">` + result.records[i].hospital_name + `</h5>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                        <div id="map_` + i + `" class="map"></div>
                        </div>
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
                                 
                    `);
                    //  console.log(latitudeResponse.length);
                    // loadMapPrint(latitudeResponse[i], longitudeResponse[i], i);
                    // loadScript();

                }
                //  print();

            } else {
                alert(result.count);
            }
        }
    });
}

function getHospitalList() {
    // var zip=$('#locationBox').val();
    if (zipCode == null || zipCode == "") {
        zipCode = $('#locationBox').val();
        if (zipCode == "" || zipCode == null) {
            alert('zip required');
            return false;
        } else {
            fecthList(zipCode);
        }

    } else {
        fecthList(zipCode);

    }
}
$(document).ready(function() {
    $('.collapse').collapse();
    $('#locateUrSelf').on('click', getLocation);
    $('#findBtn').on('click', getHospitalList);
    //console.log(latitudeResponse.length);
});
//console.log(latitudeResponse.length);