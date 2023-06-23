let tabContent = document.getElementsByClassName("tabcontent");
let tab = document.querySelectorAll(".tab a");


function hideMe(index){
    for (let i=0; i<tabContent.length; i++){
        tabContent[i].style.display = 'none';
        tab[i].style.color = 'black';
    }
    
    tabContent[index].style.display = 'block';
    if(index!=0){tab[index].style.color = '#ffb100';}
}
    