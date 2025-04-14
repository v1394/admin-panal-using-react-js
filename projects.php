<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


$servername = "localhost";  
$username = "root";        
$password = "";           
$dbname = "portal";         


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['add']) || isset($_POST['update'])) {
     
        $project_name = $conn->real_escape_string($_POST['project_name']);
        $description = $conn->real_escape_string($_POST['description']);
        $start_date = $conn->real_escape_string($_POST['start_date']);
        $end_date = $conn->real_escape_string($_POST['end_date']);

        if (isset($_POST['update'])) {
            $id = $_POST['id'];
            $sql = "UPDATE projects SET project_name='$project_name', description='$description', start_date='$start_date', end_date='$end_date' WHERE id='$id'";
        } else {
            $sql = "INSERT INTO projects (project_name, description, start_date, end_date) 
                    VALUES ('$project_name', '$description', '$start_date', '$end_date')";
        }

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Project saved successfully!"]);
        } else {
            echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
        }
    }
}

if (isset($_GET['delete'])) {
    $id = $_GET['delete'];
    $sql = "DELETE FROM projects WHERE id='$id'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["message" => "Project deleted successfully!"]);
    } else {
        echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
    }
}


$sql = "SELECT * FROM projects";
$result = $conn->query($sql);
$projects = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $projects[] = $row;
    }
}

echo json_encode($projects);
$conn->close();
?>
