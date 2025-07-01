
function sumit(){
    const prix=document.getElementById("prix");
    const pourcentage=document.getElementById("pourcentage");
    const remise=document.getElementById("remise");
    const prixnub=Number(prix.value);
    const pourcentagenub=Number(pourcentage.value);
    if(prix.value=="" || pourcentage.value==""){
        remise.innerText="Tout les champs doivent être remplis";
        remise.style.backgroundColor="red";
        remise.style.padding=`${10}px`
    }else{
    if(isNaN(prixnub) || isNaN(pourcentagenub)){
        if(isNaN(prixnub)){
            prix.placeholder="Entrer un nombre";
            prix.style.borderColor='red'
        }
        if(isNaN(pourcentagenub)){
            pourcentagenub.placeholder="Entrer un nombre";
            pourcentagenub.style.borderColor='red';
        }
    }else{
        const rest=(prixnub-(prixnub*(pourcentagenub/100)));
        
        remise.innerText="Le prix après remise est:"+rest+"FCFA";
        remise.style.backgroundColor="rgb(160, 241, 160)";
        remise.style.padding=`${10}px`
        

    }
}
}
