<?php
header("Access-Control-Allow-Origin: *");
include('connection.php');


$todo = $_POST['todo'];



$sql = "INSERT INTO todo (todo_content) VALUES ('$todo')";


if ($mysqli->query($sql) === TRUE) {
    $response = [
        'status' => 'success',
        'message' => "User '$$todo' was created successfully."
    ];
} else {
    
    $response = [
        'status' => 'error',
        'message' => 'Error: ' . $mysqli->error
    ];
}


echo json_encode($response);
?>
