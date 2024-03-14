<?php
header("Access-Control-Allow-Origin: *");
include('connection.php');


$name = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];


$sql = "INSERT INTO users (username, email, password) VALUES ('$name', '$email', '$password')";


if ($mysqli->query($sql) === TRUE) {
    
    $response = [
        'status' => 'success',
        'message' => "User '$name' was created successfully."
    ];
} else {
    
    $response = [
        'status' => 'error',
        'message' => 'Error: ' . $mysqli->error
    ];
}


echo json_encode($response);
?>
