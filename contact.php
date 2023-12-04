

<?php
$servername = "sql101.infinityfree.com";
$username = "if0_35552087";
$password = "#Ry-Ze-An-Ro20#";
$dbname = " if0_35552087_Contact_Form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>







<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect post data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    if (empty($name) || empty($email) || empty($message)) {
        // Handle the error scenario; you might want to redirect to an error page
        echo "All fields are required."; // Alternatively, redirect to an error page
    } else {
        $to = 'your_email@example.com'; // Replace with your email address
        $subject = 'New Contact Form Submission';
        $email_content = "Name: $name\nEmail: $email\nMessage: $message\n";

        if (mail($to, $subject, $email_content)) {
            // Redirect to a thank-you page
            header('Location: thank-you.html');
            exit;
        } else {
            // Handle the error scenario; you might want to redirect to an error page
            echo "There was a problem sending your message."; // Alternatively, redirect to an error page
        }
    }
} else {
    echo "This page is for form submissions only.";
}
?>
