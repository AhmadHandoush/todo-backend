if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    $id = $_GET['id'];

    $sql = "DELETE FROM todos WHERE id=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo "Todo item deleted successfully";
    } else {
        echo "Error: " . $conn->error;
    }
}