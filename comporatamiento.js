
var contadorObjetivos=0;
var llego=0;
var contadorExperiencia=0;
document.getElementById('sig_objetivos').addEventListener('click',function() {
   if(contadorObjetivos==0)
   {
        contadorObjetivos++;
        document.getElementById("objetivos").innerHTML="Asimismo, deseo sumar competencias para mejorar como profesional y contribuir a alcanzar los objetivos para los cuales se me asigne.";
        document.getElementById("sig_objetivos").innerHTML="Anterior";
   }
   else
   {
    contadorObjetivos--;
    document.getElementById("objetivos").innerHTML="  Búsqueda de un puesto dentro de una empresa de servicios financieros para aplicar mi educación y competencias técnicas para promover el éxito de la organización. Todo esto mediante la aplicación de sólidas habilidades de resolución de problemas, comunicación y servicio al cliente.";
    document.getElementById("sig_objetivos").innerHTML="Siguiente";
   }

});
document.getElementById('sig_experiencia').addEventListener('click',function() {
   if(llego==0)
      contadorExperiencia++;
   else
      contadorExperiencia--;
   remplazo(contadorExperiencia);

});
function remplazo(contador)
{
   switch(contador)
   {
         case 0:
            document.getElementById("experiencia").innerHTML="JPMorgan Chase & Co. <br><br>Puesto: Software engineer<br><br>Enero 2019-Actualidad";
            document.getElementById("sig_experiencia").innerHTML="Siguiente";
            llego=0;
            break;
         case 1:
            document.getElementById("experiencia").innerHTML='Globant <br><br> Puesto: Desarrollador .NET y react<br><br> Mayo 2017-Enero 2019</p>';
            break;
         case 2:
            document.getElementById("experiencia").innerHTML='UBERTRACK <br><br> Puesto: Desarrollador .NET <br><br> Julio 2014-Diciembre 2016</p>';
            break;
         case 3:
            document.getElementById("experiencia").innerHTML='Minder S.A. <br><br> Puesto: Analista programador<br><br> Noviembre 2011-Febrero de 2014</p>';
            document.getElementById("sig_experiencia").innerHTML="Anterior";
            llego=1;
            break;
   }
}