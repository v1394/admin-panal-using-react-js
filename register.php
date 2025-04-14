<?php

include 'connection.php';


header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] == "POST") {

    error_log("Request method: " . $_SERVER['REQUEST_METHOD']); 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
  
   
    if (empty($name) || empty($email) || empty($password)) {
        echo json_encode(["message" => "All fields are required."]);
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["message" => "Invalid email format."]);
        exit;
    }

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

   
    $query = "SELECT * FROM registration WHERE email = ?";
    $stmt = $pdo->prepare($query);
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user) {
        echo json_encode(["message" => "User already exists."]);
        exit;
    }

    //
    $query = "INSERT INTO registration (name, email, password) VALUES (?, ?, ?)";
    $stmt = $pdo->prepare($query);

  
    if ($stmt->execute([$name, $email, $hashed_password])) {
        echo json_encode(["message" => "User registered successfully."]);
    } else {
        echo json_encode(["message" => "There was an error registering the user. Please try again."]);
    }
} else {

    echo json_encode(["message" => "Invalid request method."]);
}
?>
