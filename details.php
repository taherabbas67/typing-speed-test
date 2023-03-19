<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $regno = $_POST["regno"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $branch = $_POST["branch"];
    $year = $_POST["year"];

    // Open the file in append mode
    $file = fopen("details.csv", "A");

    // Write the data to the file
    fputcsv($file, array($name, $regno, $email, $phone, $branch, $year));

    // Close the file
    fclose($file);
}
?>
