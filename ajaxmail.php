<?php
$un=$_POST['username'];
$em=$_POST['useremail'];
$msg=$_POST['mesg'];
if(trim($un)!="Your Name" && trim($msg)!="Your message" && trim($em)!="Your Email" && trim($un)!="" && trim($msg)!="" && trim($em)!="")
{
	if(filter_var($em, FILTER_VALIDATE_EMAIL))
	{
		$message="Olá Admin..<p>".$un." enviou uma mensagem com id  ".$em." </p><p>Mensagem é : ".$msg."</p>";
		
		$message_user="Olá ".$un."<p> Obrigado pelos comentários, são de grande importância para nós. <br> Nossa equipe irá responder em breve.</p><p>Tenha um ótimo dia!</p>";
		
		
		$headers = "MIME-Version: 1.0" . "\r\n";
		$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
		$headers .= 'From: <contato@labsaoluiz.com>' . "\r\n";

		if(mail('luana@labsaoluiz.com','Pergunta para Laboratório São Luis',$message,$headers ))
		{
			if($_POST['check']==1)
			{
				mail($em,'Resposta de Laboratório São Luiz',$message_user,$headers );
			}
		echo '1#<p style="color:green;">Email enviado com sucesso.</p>';
		}
		else
		{
		echo '2#<p style="color:red;">Por favor, tente novamente.</p>';
		}
	}
	else
		echo '2#<p style="color:red">Por favor, entre com um email válido.</p>';
}
else
{
echo '2#<p style="color:red">Por favor, preencha todos os campos.</p>';
}?>