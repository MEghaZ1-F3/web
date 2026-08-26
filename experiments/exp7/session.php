<?php
session_start();

if(isset($_SESSION['page_views'])) {
    $_SESSION['page_views'] += 1;
} else {
    $_SESSION['page_views'] = 1;
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP Session Counter</title>
    <style>
        body { font-family: Arial; text-align: center; margin-top: 50px; }
        .counter-badge { font-size: 36px; color: #d88c78; font-weight: bold; }
    </style>
</head>
<body>
    <h2>Page Views Session State</h2>
    <p>Total times this page was viewed in current session:</p>
    <div class="counter-badge"><?php echo $_SESSION['page_views']; ?></div>
</body>
</html>