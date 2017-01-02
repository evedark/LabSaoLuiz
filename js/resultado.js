function entrega_resultado() 

{
	protocolo = $('#resultados_clientes #protocolo').val();
	senha = $('#resultados_clientes #senha').val();
	
  if (protocolo.length<1) {

    alert( 'Informe o protocolo!!!' );

    return;

  }



  if (senha.length<1) {

    alert( 'Informe a senha!!!' );

    return;

  }

  if (senha.length!=6) {

    alert( 'Numero de senha invalido!!! Digite a senha novamente.' );

    return;

  }

  if ((protocolo.length==11) || (protocolo.length==14)) {

    var s = "http://187.61.123.254//cgi-bin/MultilabCGI.exe/RP_" +

    protocolo + '.PDF?' +

     senha

     ;

     window.open( s, 'LabSaoLuiz', 'width=600;height=50;menubar=no;toolbar=no;location=no;status=no' );

    return;

  }

}

function checkdata() {
	with(document.form_medicos) {	
	        if (crm.value == "" || senha.value == "") {
			alert("Preencha os campos corretamente!");
			crm.focus();
			return false; }
				
		
       submit();
	}
}