function camels(){
let camels=document.getElementById('camels').value; 
let zakat;
 if(camels>=150){
    zakat="3 Hiqqay";}

else if(camels>=145){
    zakat="2 Hiqqay +1 Bint e Makhaz";
}
else if(camels>=140){
    zakat="2 Hiqqay + 4 Goat";
}

else if(camels>=135){
    zakat="2 Hiqqay + 3 Goat";
}

else if(camels>=130){
    zakat="2 Hiqqay + 2 Goat";
}

else if(camels>=125){
    zakat="2 Hiqqay + 1 Goat";
}
else if(camels>121){
    zakat="2 Hiqqay ";}
else if (camels>=91){
   zakat="2 Hiqqay";
    
} else if(camels>=76){
    zakat="2 Bint e Laboon";
}
else if(camels>=61){
    zakat="1 Jizaa ";
}
else if(camels>=46){
    zakat="1 Hiqqa";
}
else if(camels>=36){
    zakat="1 Bint e Laboon";
}
 else if(camels>=25){
     zakat="1 Bint e Makhaz";
 }
 else if(camels>=20){
   zakat="4 Goats or Sheep";
 }

else if(camels>=15){
    zakat="3 Goats or Sheep";
}

else if(camels>=10){
    zakat="2 Goats or Sheep";
}

 else if(camels>=5){
     zakat="1 Goats or Sheep";
 }
 else{
     zakat="No Zakat";
 }
document.getElementById('h1').innerHTML=zakat;  } 


function cows(){
    let cows=document.getElementById('cows').value;
    let zakatCow;
    if(cows>=130){
        zakatCow="3 Tabiay + 1 Musinna";
    }
   else if(cows>=120){
        zakatCow="4 Tabiay or 3 Musinna";
    }
    else if(cows>=110){
        zakatCow="1 Tabiay + 2 Musinna";
    }
    else if(cows>=100){
        zakatCow="2 Tabiay + 1 Musinna";
    }
    else if(cows>=90){
        zakatCow="3 Tabiay";
    }
    else if(cows>=80){
        zakatCow="2 Musinna";
    }
    else if(cows>=70){
        zakatCow="1 Tabiay + 1 Musinna";
    }
    else if(cows>=60){
        zakatCow="2 Tabiay";
    }
    else if(cows>=40){
        zakatCow="1 Musinna";
    }
    else if(cows>=30){
        zakatCow="1 Tabia";
    }
    else{
        zakatCow="No Zakat";
    }
    document.getElementById('h1').innerHTML=zakatCow;
}
function goats(){
    let goats=document.getElementById('goats').value;
    let zakatgoat;
    if(goats>=400){
        zakatgoat="4 goats";
    }
   else if(goats>=201){
        zakatgoat="3 goats";
    }
   else if(goats>=121){
        zakatgoat="2 goats";
    }
  else  if(goats>=40){
        zakatgoat="1 goats";
    }
    else  {
        zakatgoat="No Zakat";
    }
    document.getElementById('h1').innerText=zakatgoat;
}