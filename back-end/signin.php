<?php

header("Access-Control-Allow-Origin: *");
include('connection.php');

// Retrieve form data
$email = $_POST['username'];
$password = $_POST['password'];

// SQL query to select user by email and password
$sql = "SELECT email, password FROM users WHERE email='$email' AND password='$password'";

// Execute the query
$result = $mysqli->query($sql);

// Check the number of rows returned by the query
if ($result->num_rows > 0) {
    // If at least one row was returned, the login is successful
    $response = [
        'status' => 'success',
        'message' => 'User logged in successfully.'
    ];
} else {
    // If no rows were returned, the login failed
    $response = [
        'status' => 'error',
        'message' => 'Invalid email or password.'
    ];
}

// Output the response as JSON
echo json_encode($response);
?>
