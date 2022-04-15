<?php
    if (!empty($_POST["name"])) {
        $to = 'hello@conse.in';
        $subject = 'New submission at conse.in';
        $message = 'Name: ' .  $_POST["name"] . "\r\n" . 
            'Email: ' . $_POST["email"] . "\r\n" .
            'Message: ' . $_POST["message"] . "\r\n";
        $headers = 'From: bot@conse.in'."\r\n".
                'Reply-To: bot@bot.conse.in';

        mail($to, $subject, $message, $headers);
    }
?>

