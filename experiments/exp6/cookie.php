<?php
$cookie_name = "last_visit";
$current_time = date("d-M-Y H:i:s A");

if(isset($_COOKIE[$cookie_name])) {
    $last_visited = $_COOKIE[$cookie_name];
    $message = "Welcome Back! Last visited on: <b style='color:#d88c78;'>$last_visited</b>";
} else {
    $message = "Welcome! This is your first visit to this webpage.";
}

setcookie($cookie_name, $current_time, time() + (86400 * 30), "/");
?>
<!DOCTYPE html>
<html>
<head><title>PHP Cookie Tracker</title></head>
<body>
    <h2>User Visit Tracker using HTTP Cookie</h2>
    <div style="padding:20px; border:1px solid #ccc; background:#f9f9f9;">
        <p><?php echo $message; ?></p>
        <p>Current Timestamp Stored: <b><?php echo $current_time; ?></b></p>
    </div>
</body>
</html>