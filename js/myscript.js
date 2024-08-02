let scounter = 0;
function slidemyimage(numy) {
   ct=1;
    let sidephotos = ["img1","img2","img3","img4","img5"]
    if (numy == 1) 
    {
        if(scounter >= ct-1){ 	scounter = 0;
        }  else{scounter++;}
        document.getElementById(img9.id).src = document.getElementById(sidephotos[scounter]).src;
    }
    if (numy == 2) 
    {

        if(scounter == 0){
            scounter = ct+1;
        }
        else{
            scounter++;
        }
        document.getElementById(img9.id).src = document.getElementById(sidephotos[scounter]).src;
    }
}