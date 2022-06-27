<?php
header('Content-Type: application/json; charset=utf-8');




include 'database.php';

// if (!empty($_POST)) {
// $IP_adress = $POST['IP_adress'];

$pdo = Database::connect();
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$sql = "SELECT IP_adress FROM smart_box WHERE connected=1 ";

$q = $pdo->query($sql);
$q->execute();
$resultat = $q->fetch(PDO::FETCH_ASSOC);
$vari = $resultat['IP_adress'];
echo json_encode($vari); 
Database::disconnect();
// echo "Insert Success";
// }


?>