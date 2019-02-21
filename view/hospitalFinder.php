<?php
/**
 * Created by PhpStorm.
 * User: hackdroid
 * Date: 15-10-2017
 * Time: 18:00
 */
include_once  "view/header.php";
?>
<div class="well container margin-top-10 card">
  <div class="row margin-top-10 margin-bottom-10">
      <div class="col-lg-8">
                 <input class="form-control" placeholder="Enter Your Pincode" id="locationBox">
      </div>
      <div class="col-lg-4">
          or
          <button class="btn btn-raised btn-primary btn-lg" id="locateUrSelf"><i class="fa fa-map-marker"></i> Locate your self</button>
      </div>
  </div>
    <div class="center-allign">
        <button class="btn btn-raised btn-danger btn-lg" id="findBtn">Find</button>
    </div>
</div>
<div class="div-scroll height-60 container margin-top-10">
    <div class="card div-scroll" id="hopitalList" >
    </div>
</div>
<?php
include_once  "view/footer.php"
?>
