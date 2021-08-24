<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sName = "localhost";
$uName = "root";
$pass = "";
$db_name = "todo_list";

$conn = mysqli_connect($sName, $uName, $pass, $db_name);

$db = new PDO('mysql:host=localhost;dbname='. $db_name . ';charset=utf8', $uName, $pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['type']) && $_POST['type'] === "add"){
   
    $sql = "INSERT INTO register (user_name, password, email, adress) VALUES ('".$_POST['user_name']."','".$_POST['password']."','".$_POST['email']."','".$_POST['adress']."')";

        if (mysqli_query($conn, $sql)) {
        $last_id = mysqli_insert_id($conn);
        echo $last_id;
        }else{
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }
}
if(isset($_POST['type']) && $_POST['type'] === "query"){
   
    $sql = "SELECT * FROM register WHERE user_name = ? AND password = ? LIMIT 1";
    $stmtselect  = $db->prepare($sql);
    $result = $stmtselect->execute([$_POST['user_name'], $_POST['password']]);
    
    if($result){
        $user = $stmtselect->fetch(PDO::FETCH_ASSOC);
        
        if($stmtselect->rowCount() > 0){
            echo $user["id"];
        }else{
            echo 'There no user for that combo';		
        }
    }else{
        echo 'There were errors while connecting to database.';
    }    
   
}
mysqli_close($conn);
?>