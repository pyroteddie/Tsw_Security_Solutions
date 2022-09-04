<?php
$to = 'Liammatulick@gmail.com'; 
$subject = 'TSW Security Solutions Enquirey';
$FullName = $_POST['ClientName'];
$Phone = $_POST['ClientPhone']
$Email = $_POST['ClientEmail'];
$Info = $_POST['ClientMessage'];
$message = "
<html>
<body>
  <p>Name: $FullName</p>
  <p>Email: $Email<p>
  <p>Phone: $Phone<p>
  <p>Message Body</p>
  <p>$Info</p>

</body>
</html>
";

$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=iso-8859-1';


$headers[] = 'From: Liammatulick@ugmail.com';

mail($to, $subject, $message, implode("\r\n", $headers));
$success = mail($to, $subject, $message, implode("\r\n", $headers));
if (!$success) {
    $errorMessage = error_get_last()['message'];
    echo $errorMessage;
}

?>

<html>
<body>
  <section>
    <div  class="FormContact">
    <span><a>Thank you 
      <?php 
      echo $_POST['FullName']  ;
      ?>
      one of our friendly staff will be in touch with you. </a>
      <p>Be sure to check your spam folder, If you have not received a reply.</p>
    </div >
  </section>

</body>


</html>


