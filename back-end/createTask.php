<?php
header("Access-Control-Allow-Origin: *");
include('connection.php');


$todo = $_POST['todo'];


$check_todo = $mysqli->prepare('select todo_content from todo where user_id=?');
$check_todo->bind_param('s', $todo);
$check_todo->execute();
$check_todo->store_result();
$todo_exists = $check_email->num_rows();


if ($todo_exists == 0) {
    
    $query = $mysqli->prepare('insert into todo(todo_content) values(?);');
    $query->bind_param('s', $todo);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "user $todo was created successfully";
} else {
    $response["status"] = "user already exists";
    $response["message"] = "user $todo wasn't created";
}
echo json_encode($response);