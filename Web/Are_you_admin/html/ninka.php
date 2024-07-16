<!DOCTYPE html>
<html>
<head>
    <title>管理者認可</title>
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="style.css"> 
</head>
<body>
    <h1>Are you admin?</h1>
    <div class="block" id="source">
        <form action="ninka.php" method="post">
            <input type="text" name="username" placeholder="username"><br>
            <input type="password" name="password" placeholder="password"><br>
            <input type="hidden" name="admin" value="False">
            <input type="submit" value="submit">
        </form>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            if (isset($_POST['username']) && isset($_POST['password'])) {
                $username = $_POST['username'];
                $password = $_POST['password'];
                $admin = $_POST['admin'];
                if ($admin === 'True') {
                    echo "<p>ようこそ {$username} さん<br> ipfctf2024{xxxxxx}</p>";
                } else {
                    echo "<p id=admin>管理者権限がありません</p>";
                }
            }
        }
        ?>
    </div>
</body>
</html>