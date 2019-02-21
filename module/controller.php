<?php
define('server', 'localhost');
define('user', 'root');
define('password', '');
//define('dbName', 'farzan');
class controller{
	function __construct(){
		$conn=mysql_connect(server,user,password);
		mysql_select_db('AppAccident',$conn);
		if(!$conn){
  		echo "connectivity Error".mysql_error();
			}
	}
	function getID($table){
		$sql="select MAX(id) as max_id from $table";
		//echo $sql;
		$res=mysql_query($sql);
		$data=mysql_fetch_array($res);
		$max_id=$data['max_id'];
		$max_id=$max_id+1;
		return $max_id;
	}
} 
?>