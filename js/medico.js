function entrega_resultado_medico() 
{

  if (document.resultados_crm.crm.value.length<1) {

    alert( 'Informe o número de registro!!!' );

    return;

  }



  if (document.resultados_crm.senha.value.length<1) {

    alert( 'Informe a senha!!!' );

    return;

  }

  if (document.resultados_crm.crm.value.length >=1 )  {



	 var s = "http://187.61.123.254//cgi-bin/MultilabCGI.exe/TM_"+

     document.resultados_crm.crm.value+'?'+ 

	 document.resultados_crm.mes.value+'&'+ 

	 document.resultados_crm.ano.value+'&'+

     document.resultados_crm.senha.value;

     window.open( s, 'LabSaoLuiz', 'menubar=no,toolbar=no,location=no,status=no,scrollbars=yes' );

    return;

  }

}