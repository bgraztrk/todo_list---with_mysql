<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$sName = "localhost";
$uName = "root";
$pass = "";
$db_name = "todo_list";

$conn = mysqli_connect($sName, $uName, $pass, $db_name);

if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

if(isset($_POST['type']) && $_POST['type'] === "add"){
  $sql = "INSERT INTO todo_list (title , category , user_id) VALUES ('".$_POST['title']."','".$_POST['category']."','".$_POST['user_id']."')";

  if (mysqli_query($conn, $sql)) {
    $last_id = mysqli_insert_id($conn);
    //"SELECT $last_id FROM todo_list";
    echo $last_id;
  } else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
  }

}
if(isset($_POST['type']) && $_POST['type'] === "del"){

  $sql = "DELETE FROM todo_list WHERE id = '".$_POST['id']."'";

if (mysqli_query($conn, $sql)) {
  echo "Record deleted successfully";
} else {
  echo "Error deleting record: " . mysqli_error($conn);
}
}
if(isset($_POST['type']) && $_POST['type'] === "delAll"){

  $sql = "DELETE FROM todo_list WHERE user_id = '".$_POST['user_id']."'";
  
  if (mysqli_query($conn, $sql)) {
    echo "Record deleted successfully";
    echo "Error deleting record: " . mysqli_error($conn);
  }
}
if(isset($_POST['type']) && $_POST['type'] === "update"){
  
  $sql = "UPDATE todo_list SET title = ('".$_POST['title']."') , category = ('".$_POST['category']."')  WHERE id = ('".$_POST['id']."')";

  if (mysqli_query($conn, $sql)) {
    echo "Record updated successfully";
  } else {
    echo "Error updating record: " . mysqli_error($conn);
  }
}

  $query = "SELECT * FROM todo_list WHERE user_id = ('".$_GET['user_id']."') ";
  $result = $conn->query($query);     
  $response = $result->fetch_all(MYSQLI_ASSOC);
  
  header('Content-Type: application/json');
  echo json_encode($response);

mysqli_close($conn);
?>





