function krediHesaplama(){
    let krediTürü,vadesayisi;
    
    let çekilecekTutar,ödenecekTutar;

    let liste=document.getElementById("krediTürü")
    krediTürü=liste.options[liste.selectedIndex].value;
    console.log(krediTürü);

    let liste1=document.getElementById("vadeSayisi")
    vadesayisi=liste1.options[liste1.selectedIndex].value;
    console.log(vadesayisi);

    let liste2=document.getElementById("cekilecekTutar")
    çekilecekTutar=liste2.value;
    console.log(çekilecekTutar);
   
    if(vadesayisi==12){
         ödenecekTutar=çekilecekTutar*3
    }
    else if(vadesayisi==24){
        ödenecekTutar=çekilecekTutar*6
   }
  else if(vadesayisi==36){
    ödenecekTutar=çekilecekTutar*12 
}
else if(vadesayisi==48){
    ödenecekTutar=çekilecekTutar*24
} else if(vadesayisi==120){
    ödenecekTutar=çekilecekTutar*48
}

  document.getElementById("sonuc").innerHTML=`kredi türü ${krediTürü} olan ${vadesayisi} ay ile geri ödenecek tutar ${ödenecekTutar} `

    

}
krediHesaplama()
