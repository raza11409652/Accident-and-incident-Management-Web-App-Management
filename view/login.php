<?php
require_once "view/header.php";
?>
<div class="login-page-logo">
    <img src="image/cardiogram.png">
</div>
<div class="login-container card  top-border bg-light">
    <form action="#" method="POST" enctype="multipart/form-data" id="loginForm" autocomplete="off">
        <div class="form-group margin-top-10">
             <input type="email" class="form-control validate" placeholder="Email" name="loginEmail" id="loginEmail">
             <span class="error-text hide" id="emailError"></span>
        </div>
        <div class="form-group margin-top-10 ">
             <input type="password" class="form-control" placeholder="Password" name="loginPassword" id="loginPassword">
             <span class="error-text hide" id="passwordError"></span>
            </div>
        <div class="center-allign loader hide">
            <img src="image/loading.gif" class="center">
        </div>
        <div class="pull-right">
            <input type="submit" value="login" class="btn btn-primary btn-raised ">
        </div>
    </form>  
</div>
<?php
    require_once "view/footer.php";
?>