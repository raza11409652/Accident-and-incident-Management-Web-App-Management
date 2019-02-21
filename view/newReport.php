<?php require_once "view/header.php";
?>
<div class="container">
<div id="response"></div>
        <div class="row margin-top-20">
        <div class="center-box ">
            <div class="card ">
                <div class="card-header center-text" >
                   Submit a new Request
                </div>
                <form action="#" method="post" id="repotingForm">
                    <div class="card-body">
                    <div class="row margin-bottom">
                    <div class="col-lg-1"><i class="fa fa-map-marker fa-2x"></i>
                    </div>
                        <div class="col-lg-8">
                            <input type="text" required name="location" class="form-control" placeholder="location" id="locationBox" onFocus="geolocate()">
                        </div>
                        <div class="col-lg-3">
                        <button class="btn btn-danger btn-block btn-raised" type="button" id="locateUrSelf"><i class="fa fa-map"></i> Locate</button>
                        </div>
                    </div>
                    <div class="row margin-top-10">
                        <div class="col-lg-1">
                        <i class="fa fa-user fa-2x"></i>
                        </div>
                        <div class="col-lg-5">
                            <select required name="numberOfPeople" id="peopleSelect" class="form-control">
                            <option value="null">number Of People </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                        <div class="col-lg-1"><i class="fa fa-heartbeat fa-2x"></i></div> 
                        <div class="col-lg-5">
                        <input type="range" name="levelOfInjury" id="levelOfInjury" min="0" max="10" >
                        <span class="small-text">Level of Injury <span id="rangeHint" class="red-text">0</span> /10 </span>
                        </div>                       
                    </div>
                    <div class="row margin-top-10">
                    <div class="col-lg-1"><i class="fa fa-ambulance fa-2x"></i></div>
                        <div class="col-lg-5">                     
                        <div class="form-group">
                        <label for="deathRadio">Any Death</label>
                        <p>
    					<input type="radio" name="anyDeath" value="true"><label class="lead">Yes</label>&nbsp; &nbsp;&nbsp;&nbsp;<input type="radio" name="anyDeath" value="false" checked=""><label class="lead">No</label>
    				</p>
                        </div>
                        </div>
                        <div class="col-lg-6">
                        
                         <!--input type="text" class="form-control margin-top-10" placeholder="Reporting Person Name"-->   
                        </div>
                    </div>
                    <div class="form-group">
                    <textarea required name="reasonOfAccident" id="" cols="30" rows="1" class="form-control" placeholder="Reason Of Accident"></textarea>
                    </div>
                    
                    <p>Reporting Person detail</p>
                    <div class="row">
                    <div class="col-lg-6">
                    <input type="text" required class="form-control" name="name" placeholder="Name">
                    </div>
                    <div class="col-lg-6">
                    <input type="tel"  required name="mobile" class="form-control" placeholder="Mobile number" id="mobile" >
                    
                    </div>
                    </div>              
                     </div>
               <div class="card-footer">
               <span class="pull-left">
               Note: Name and Mobile will not be Disclose
               </span>
                <button class="pull-right btn btn-raised btn-info" type="submit">Submit</button>
               </div>
            </div>
            </form>

        </div>
     
        </div>
</div>

    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYz_cNY34LA4hA7J1MnUyZw6AJFgxCBaQ&libraries=places&callback=initAutocomplete"
        async defer></script>
<?php require_once "view/footer.php";
?>