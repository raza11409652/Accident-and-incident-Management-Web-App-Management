<?php
 include_once 'module/controller.php'; 
$obj=new controller();

$sql="select * from incident";
	//echo $sql;
	$res=mysql_query($sql);
$count=mysql_num_rows($res);
//	echo $count;
	while($data=mysql_fetch_array($res)){
		?>
              <div class="card ">
                <div class="card-header">
                  <?php  echo "Location: " .$data['location'] . "<span class='pull-right'>Date: ".$data['date'] ."</span>" ;            
                    ?>
                    <div class="row">
                        <div class="col-lg-3">
                        Number Of People
                        <?php echo $data['number_of_person'];?>
                        </div>
                        <div class="col-lg-3">
                        Injury Level Reported
                        <?php   echo $data['injury_level'] 
                        ?>/10
                        </div>
                        <div class="col-lg-3">
                        Reason :
                            <?php echo $data['reason_accident']; ?>
                        </div>
                        <div class="col-lg-3">
                        Any Death Reported
                        <?php 
                        $flag="";
                        if($data['any_death']=='true')
                        {
                            $flag="bg-danger";
                        }
                        else{
                            $flag="bg-warning";
                        }
                        ?>
                        <span class="<?php echo $flag; ?>"><?php
                        echo $data['any_death']; 
                        ?></span>
                        </div>
                    </div>
                </div>
              </div>        
		<?php 

	}
?>