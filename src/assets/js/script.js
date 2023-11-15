$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:2,
        itemsDesktop:[1000,2],
        itemsDesktopSmall:[979,2],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
});



document.addEventListener("DOMContentLoaded", function() {
let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//Chamando a funcao (opcional)
});

searchBtn.addEventListener("click", ()=>{ // Barra lateral aberta quando você clica no icone de pesquisa
  sidebar.classList.toggle("open");
  menuBtnChange(); //Chamando a funcao (opcional)
});

// a seguir estão o código para alterar o botão da barra lateral (opcional)
function menuBtnChange() {
if(sidebar.classList.contains("open")){
  closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//substituindo a classe
}else {
  closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//substituindo a classe
}
}
});

