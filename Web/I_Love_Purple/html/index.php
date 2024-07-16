<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>web2</title>
</head>
<body>
    <h1>I Love Purple!</h1>
    <p>明るくいこう！</p>
    <form action="./index.php" method="GET">
        <input type="number" name="colorRed" placeholder="Red" min="0" max="255"> <!-- 0~255の範囲で入力 -->
        <input type="number" name="colorGreen" placeholder="Green" min="0" max="255"> <!-- 0~255の範囲で入力 -->
        <input type="number" name="colorBlue" placeholder="Blue" min="0" max="255"> <!-- 0~255の範囲で入力 -->
        <input type="submit" value="送信">
    </form>
</body>
<style>
    .flag p{
        font-size: 30px;
        color: white;
    }
    body{
        text-align: center;
        font-size: 30px;
    }
</style>
<?php
    $colorRed = $_GET['colorRed'];
    $colorGreen = $_GET['colorGreen'];
    $colorBlue = $_GET['colorBlue'];
    echo "<style>body{background-color:rgb($colorRed, $colorGreen, $colorBlue);}</style>";

    // 紫色の範囲を定義する条件を更新します。
    // ここでは、赤と青が128以上で、緑が60以下の場合に紫色と見なします。
    if($colorRed >= 128 && $colorBlue >= 128 && $colorGreen <= 60){
        echo "<div class=flag><p>Wow! Purple!</p><p>ipfctf2024{xxxxxx}</p></div>";
    }
?>
</html>