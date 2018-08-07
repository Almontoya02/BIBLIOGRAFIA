function nuevo(){

    var objectname = document.getElementById('txtName')
    var txtName= document.getElementById('txtName').value
  
    console.log(txtName)
    alert('hello world');
}
/**funcion para abrir el sidenav y desplazar todo el resto del contenifo
 */
function openNav() {
    document.getElementById("mysidenav").style.width = "250px";
    document.getElementById("Main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}
/** funcion para cerrar el disenav */
function closeNav() {
    document.getElementById("mysidenav").style.width = "0";
    document.getElementById("Main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}
/**funcion para cambiar la posicion de las barras 
function myFunction(x) {
    x.classList.toggle("change");
}*/


