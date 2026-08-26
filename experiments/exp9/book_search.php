<?php
$db = new mysqli("localhost", "root", "", "library_db");

if(isset($_POST['add_book'])) {
    $stmt = $db->prepare("INSERT INTO books VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $_POST['acc_no'], $_POST['title'], $_POST['author'], $_POST['edition'], $_POST['publisher']);
    $stmt->execute();
}

$search_title = $_GET['search'] ?? '';
$result = $db->query("SELECT * FROM books WHERE title LIKE '%$search_title%'");
?>
<table border="1">
    <tr><th>Acc No</th><th>Title</th><th>Authors</th><th>Edition</th><th>Publisher</th></tr>
    <?php while($row = $result->fetch_assoc()): ?>
    <tr>
        <td><?= $row['acc_no'] ?></td>
        <td><?= $row['title'] ?></td>
        <td><?= $row['author'] ?></td>
        <td><?= $row['edition'] ?></td>
        <td><?= $row['publisher'] ?></td>
    </tr>
    <?php endwhile; ?>
</table>