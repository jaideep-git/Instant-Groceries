<?php

// GET LIST OF PRODUCTS BY CATEGORY


$myOrder = $_POST["myOrder"];
//$myCart = addslashes($myCart);


require_once("easy_groceries.class.php");

$oEasyGroceries = new EasyGroceries();

$data = $oEasyGroceries->makeInvoice($myOrder);

header("Content-Type: application/json");

echo $data;

?>
