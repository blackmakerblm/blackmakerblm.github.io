<?php
    if ($_POST) {
    	
    $to = "alioubah571@gmail.com";
    $from = $_POST['email'];
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $number = $_POST['number'];
    $cmessage = $_POST['message'];

    $headers = "From: $from";
	$headers .= "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $subject = "You have a message from your Bitmap Photography.";

    $logo = 'img/logo.png';
    $link = 'https://blackmakerblm.github.io';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
	$body .= "<td style='border:none;'><strong>Name:</strong> {$name}</td>";
	$body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Subject:</strong> {$csubject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'>{$cmessage}</td></tr>";
	$body .= "</tbody></table>";
	$body .= "</body></html>";

    use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
	require 'vendor/autoload.php';

// Instantiation and passing `true` enables exceptions
	$mail = new PHPMailer(true);

	try {
  
    $mail->SMTPDebug = 1;                      
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                    
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'alioubah571@gmail.com';                    
    $mail->Password   = 'workedatkatawal';                              
    $mail->SMTPSecure = 'tls';         
    $mail->Port       = 587;                                   
    
    $mail->setFrom('from@example.com', 'bLm');
    $mail->addAddress('alioubah571@gmail.com', 'Blacky');     


    $mail->isHTML(true);                                  
    $mail->Subject = $subject;
    $mail->Body    = $body;
    
    $mail->send();
    echo 'Votre message a bien été envoyé';
	} catch (Exception $e) {
	    echo "Erreur: {$mail->ErrorInfo}";
	}
	header("Location: index.html");
	exit();
	    }
    

?>