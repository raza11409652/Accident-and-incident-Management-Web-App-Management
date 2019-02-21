<?php
include "controller.php";
$obj =new controller();
if(isset($_POST))
{
   $location=$_POST['location'];
   $numberOfPeople=$_POST['numberOfPeople'];
   $levelOfInjury=$_POST['levelOfInjury'];
   $anyDeath=$_POST['anyDeath'];
   $reasonOfAccident=$_POST['reasonOfAccident'];
   $name=$_POST['name'];
   $mobile=$_POST['mobile'];
   $location=mysql_escape_string($location);
//echo $location .$numberOfPeople .$levelOfInjury .$anyDeath .$reasonOfAccident .$name .$mobile;
    $id=$obj->getID('incident');
    //echo $id;
    $date=date('y-m-d');
    if(preg_match('/^[7-9][0-9]{9}$/',$mobile)){
        $sql_insert="insert into incident VALUES('$id','$location','$numberOfPeople','$levelOfInjury','$reasonOfAccident',
        '$anyDeath','$name','$mobile','$date')";
        if(mysql_query($sql_insert)){
            echo "1";
        }
        else{
            echo "0";
        }
    }
    else{
        echo "-1";  
    }
    
} 
?>