<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Collect form data
    $name = $_GET['name'];
    $email = $_GET['email'];
    $phone = $_GET['phone'];
    $services = implode(', ', $_GET['services']); // Convert array to comma-separated string
    $budget = $_GET['budget'];

    // Recipient email
    $to = "your_email@example.com";

    // Email subject
    $subject = "New Inquiry from $name";

    // Email message
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Services: $services\n";
    $message .= "Budget: $budget\n";

    // Additional headers
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Thank you! Your message has been sent.";
    }
}
?>
