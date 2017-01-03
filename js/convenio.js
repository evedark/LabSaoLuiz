function entrega_resultado_conveniado() 
{
  if (document.resultados_convenidados.conveniadocodigo.value.length<1) {
    alert( 'Informe o numero do codigo de acesso!!!' );
    return;
  }
  if (document.resultados_convenidados.conveniadosenha.value.length<1) {
    alert( 'Informe a senha!!!' );
    return;
  }

  if ((document.resultados_convenidados.conveniadocodigo.value.length>=3)) {
	 var s = "http://187.61.123.254/cgi-bin/MultilabCGI.exe/TC_"+
     document.resultados_convenidados.conveniadocodigo.value+'?'+ 
	 '01&'+ 
	 document.resultados_convenidados.conveniadomes.value+'&'+
	 document.resultados_convenidados.conveniadoano.value+'&'+ 
	 '31&'+
	 document.resultados_convenidados.conveniadomes.value+'&'+ 
	 document.resultados_convenidados.conveniadoano.value+'&'+
     document.resultados_convenidados.conveniadosenha.value;
     window.open(s, 'LabSaoLuiz','menubar=no,location=no,scrollbars=1,resizable=1,status=no');
    return;
  }
}