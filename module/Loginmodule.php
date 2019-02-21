<?php 
class Loginmodule{
    private $IP;
    private $email;
    private $password;
    public $err;
    function __construct(){
        /* $this->email=$email;
            $this->pasword=$password;
            */
            $this->IP=$_SERVER['REMOTE_ADDR'];
            if (array_key_exists('HTTP_X_FORWARDED_FOR', $_SERVER)) {
                $this->IP = array_pop(explode(',', $_SERVER['HTTP_X_FORWARDED_FOR']));
            }
        }
    function checkUserExist($email){
        if($email){
            // user Exist in table than

            return 1;
        }else{
            return 0;
        }
    }
    function loginValidate($email,$password){
        if($this->checkUserExist($email)==1){
            //valid user exist in table
            /*
                active user go for login
            */
        }
        else{
            // user dont Exist in table 
            $this->err='-1';                 // -1 for User dont Exist
        }
    }
}
if(isset($_POST)){
    $email=$_POST['loginEmail'];
    $email=mysql_real_escape_string($email);
    $passWord=$_POST['loginPassword'];
          // echo $email;
  $handler=new Loginmodule();
  if(filter_var($email,FILTER_VALIDATE_EMAIL)){
     $handler->loginValidate($email,$password);
  }
  else{
    $handler->err='-2';                     // -2 for Invalid Email
  }
  echo $handler->err;
}
?>