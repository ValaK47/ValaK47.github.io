let e = 0
let key = 0

let erreur = document.createElement("p")


function ajouteDiv(localNomEcurie, localNomPilote) {
    //création de la div avec les information sur la voiture
    let data = [];
    let d = document.createElement("div")
    let btn_mod = document.createElement("img")
    let btn_valider = document.createElement("img")
    let btn_suppr = document.createElement("img")
    let div_btn = document.createElement("div")
    let ecurie = document.createElement("p")
    let nom_voiture = document.createElement("p")
    let i = document.createElement("img")
    let nouveau_nom = document.createElement("input")

    nouveau_nom.style.display = "none";
    btn_valider.style.display = "none";

    
    d.className = "element"
    div_btn.className = "div_btn" 
    d.id = e
    
    btn_suppr.className = "suppression"
    btn_mod.className = "modifier"
    btn_valider.className = "valider"
    btn_suppr.id = "s"+e
    btn_mod.id = "m"+e
    nom_voiture.id = "v"+e
    nouveau_nom.id = "n"+e
    btn_valider.id = "b"+e

    i.className = "image"

    
    btn_valider.setAttribute('src','./images/icones/valider.png');
    btn_valider.addEventListener("click", Valider)
    
    btn_mod.setAttribute('src','./images/icones/modifier.png')
    btn_mod.addEventListener("click", Modifier)
    
    btn_suppr.setAttribute('src','./images/icones/delete.png')
    btn_suppr.addEventListener("click", btnSu)
    btn_suppr.setAttribute("onclick","document.getElementById(\""+d.id+"\").remove()")
    
    if (localNomEcurie == null ){
        ecurie.textContent = document.getElementById("equipe").value
    }
    else{
        ecurie.textContent = localNomEcurie
    }
    if (localNomPilote == null){
        nom_voiture.textContent = document.getElementById("car_name").value
    }
    else{
        nom_voiture.textContent = localNomPilote
    }
    
    if (ecurie.textContent == "Mercedes"){
        i.setAttribute('src','./images/mercedes.jpg')
    }
    if (ecurie.textContent == "Ferrarie"){
        i.setAttribute('src','./images/ferrarie.jpg')
    }
    if (ecurie.textContent == "Red Bull"){
        i.setAttribute('src','./images/red bull.jpg')
    }
    if (ecurie.textContent == "Williams"){
        i.setAttribute('src','./images/williams.jpg')
    }
    if (ecurie.textContent == "Mclaren"){
        i.setAttribute('src','./images/mclaren.jpg')
    }
    if (ecurie.textContent == "Haas"){
        i.setAttribute('src','./images/haas.jpg')
    }
    if (ecurie.textContent == "Alphatauri"){
        i.setAttribute('src','./images/alpha tauri.jpg')
    }
    if (ecurie.textContent == "Alfa Romeo"){
        i.setAttribute('src','./images/alfa romeo.jpg')
    }
    if (ecurie.textContent == "Alpine"){
        i.setAttribute('src','./images/alpine.jpg')
    }
    if (ecurie.textContent == "Aston Martin"){
        i.setAttribute('src','./images/aston martin.jpg')
    }
    
    d.appendChild(i);
    d.appendChild(ecurie);
    d.appendChild(nom_voiture);
    d.appendChild(nouveau_nom)
    d.appendChild(div_btn);
    div_btn.appendChild(btn_mod);
    div_btn.appendChild(btn_valider)
    div_btn.appendChild(btn_suppr);
    document.getElementById("voitures").appendChild(d);
    
    
    data.push(equipe.value, car_name.value);
    pushinlocal(data);
    e++
    
}


// local storage
function pushinlocal(data){
    localStorage.setItem("key"+key, JSON.stringify(data));
    key++;
}


window.onload = function(){
    for (let i = 0; i < localStorage.length; i++){
        let localData = localStorage.getItem(localStorage.key(i));
        let noms = "";
        for (let y = 0; y<localData.length; y++ ){
            if (localData[y] != '[' && localData[y] != '"' && localData[y] != ']'){
                noms += localData[y]
            }
        }
        let tab = noms.split(",")
        ajouteDiv(tab[0],tab[1])
    }
}



// permet de modifier le nom de la voiture
const Modifier = u =>{
    modify(u.target.id)
}
function modify(index){
    let nomVoiture = document.getElementById("v"+index[1])
    let iconeModifier = document.getElementById("m"+index[1])
    nomVoiture.style.display = "none";
    iconeModifier.style.display = "none";
    
    let newName = document.getElementById("n"+index[1])
    let BoutonVal = document.getElementById("b"+index[1])
    newName.style.display = "block";
    BoutonVal.style.display = "block";


}

const Valider = y =>{
    valider(y.target.id)
}
function valider(index){
    let BoutonVal = document.getElementById("b"+index[1])
    let newName = document.getElementById("n"+index[1])
    newName.style.display = "none"
    BoutonVal.style.display = "none"


    let iconeModifier = document.getElementById("m"+index[1])
    let nomVoiture = document.getElementById("v"+index[1])
    nomVoiture.style.display = "block"
    iconeModifier.style.display = "block"
    document.getElementById("v"+index[1]).textContent = document.getElementById("n"+index[1]).value
    // localStorage.removeItem("key"+index[1])
    // localStorage.setItem("key"+index[1], document.getElementById("n"+index[1]).value)
    
}

// supprime localstorage
const btnSu = u =>{
    Delete(u.target.id)
}
function Delete(btnId){    
    localStorage.removeItem("key"+btnId[1]);
}

// mise en place API

function fullscreen(){
    document.documentElement.requestFullscreen()
}

document.getElementById('result').innerHTML = navigator.deviceMemory || 'unknown'
