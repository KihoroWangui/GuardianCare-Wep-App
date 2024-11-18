<?php
$dsn="mysql:host=localhost;dbname=guardiancare";
$dbusername="root";
$password="root";
try{ 
    $pdo=new PDO($dsn, $bdusername,$dbpassword);
    $pdo-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch(PDOException $e){
    echo "Connection failed: ".$e->getMessage();
}