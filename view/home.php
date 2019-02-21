<?php
require_once "view/header.php";
?>

<section class="container">
    <div class="card height-60">
    <div class="card-header">
    <span class="header-text bottom-border-header-text">Latest Reports</span>
    </div>
    <div class="card-body div-scroll">
    <?php
    include "getData.php"; 
    ?>
    </div>
    </div>
</section>
<div class="custom-container margin-top-10">
<div class="row margin-bottom-10">
    <div class="col-lg-4">
        <div class="card bg-dark white-text">
            <div class="card-header">
                <span class="header-text">
                Tech News
                </span>
            </div>
            <div class="card-body div-scroll news-box " id="news1">
            <div class="container-banner">
  <div class="banner hide" id="news1banner">
    LOADING
    <div class="banner-left"></div>
    <div class="banner-right"></div>
  </div>
</div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
    <div class="card bg-warning">
            <div class="card-header">
                <span class="header-text">
                Sports News
                </span>
            </div>
            <div class="card-body div-scroll news-box " id="news2">
            <div class="container-banner">
  <div class="banner hide" id="news2banner">
    LOADING
    <div class="banner-left"></div>
    <div class="banner-right"></div>
  </div>
</div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
    <div class="card bg-light">
            <div class="card-header">
                <span class="header-text">
                National Geographic
                </span>
            </div>
            <div class="card-body div-scroll news-box " id="news3">
            <div class="container-banner">
  <div class="banner hide" id="news3banner">
    LOADING
    <div class="banner-left"></div>
    <div class="banner-right"></div>
  </div>
</div>
            </div>
        </div>
    </div>
</div>
</div>

<?php
require_once "view/footer.php";
?>