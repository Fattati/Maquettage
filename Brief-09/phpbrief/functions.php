<?php
function getAllDataFromTable($table)
{
    include 'dbConnection.php';
    $req = "SELECT * FROM $table";
    $res = $cnx->query($req);
    // 
    return $res;

    // $array = [];
    // while ($row = $res->fetch_assoc()) {
    //     array_push($array, $row["table_name"]);
    // }
    // // 
    // return $array; 
}
// 
function selectByOneParam($query, $value)
{
    include 'dbConnection.php';
    $retValue = null;
    $req = $cnx->prepare($query);
    $req->bind_param("s", $value);
    $req->execute();
    $req->bind_result($retValue);
    $req->fetch();
    // 
    return $retValue;
}
function selectByTwoParam($query, $values)
{
    include 'dbConnection.php';
    $retValue = null;
    $req = $cnx->prepare($query);
    $req->bind_param("ss", $values[0], $values[1]);
    $req->execute();
    $req->bind_result($retValue);
    $req->fetch();
    // 
    return $retValue;
}
// 
if (isset($_POST["onLoadClientEmail"])) {
    $clientId = selectByOneParam("SELECT id_client FROM client WHERE email_client = ?", $_POST["onLoadClientEmail"]);
    echo selectByOneParam("SELECT COUNT(quantite_produit) FROM produitpanier WHERE id_panier IN (select id_panier FROM panier where id_client = ?)", $clientId);
}
// 
if (isset($_POST['prodId'])) {
    $prodId = $_POST['prodId'];
    include 'dbConnection.php';
    //IF USER EXISTS OR NOT
    $clientId = selectByOneParam("SELECT id_client FROM client WHERE email_client = ?", $_POST["clientEmail"]);
    // 
    if ($clientId != null) {
        // IF THE PRODUCT IS AVAILABLE OR NOT
        $qntProd = selectByOneParam("SELECT qt_max FROM produit WHERE id_produit = ?", $_POST['prodId']);
        // 
        if ($qntProd > 0) {
            // IF USER HAVE A CART OR NOT
            $onGoingCart = selectByOneParam("SELECT COUNT(id_panier) FROM panier WHERE id_client = ?", $clientId);
            if ($onGoingCart == 0) {
                $req = $cnx->prepare("INSERT INTO panier (id_client) VALUES(?)");
                $req->bind_param("s", $clientId);
                $req->execute();
                // 
            }
            $prodAlreadyExists = selectByTwoParam("SELECT COUNT(quantite_produit) FROM produitpanier WHERE id_produit = ? AND id_panier IN (select id_panier FROM panier where id_client = ?)", [$prodId, $clientId]);
            if ($prodAlreadyExists == 0) {
                // 
                $req = $cnx->prepare("INSERT INTO produitpanier VALUES(1,?,(select id_panier FROM panier where id_client = ?))");
                $req->bind_param("ss", $_POST['prodId'], $clientId);
                echo $req->execute();
            } else {
                echo "102";
            }
        } else {
            echo "101";
        }
    } else {
        echo "100";
    }
}
// 
function console_log($data)
{
    echo "<script>console.log(" . json_encode($data) . ")</script>";
}
