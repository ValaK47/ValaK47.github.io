let e = 0
// let v = 0
let key = 0

let erreur = document.createElement("p")

let data = [];

function ajouteDiv() {
    //valide si l'utilisateur a bien rentré un nom pour sa voiture
    if (document.getElementById("car_name").value == ''){
        erreur.id = "erreur"
        erreur.textContent = "veuilliez rentrer un nom pour votre voiture" 
        selection.appendChild(erreur)
    }
    else{
        erreur.id = "valider"
        erreur.textContent = "voiture bien enregistré !"
        selection.appendChild(erreur)
        
        //création de la div avec les information sur la voiture
        let d = document.createElement("div")
        let btn_mod = document.createElement("img")
        let btn_suppr = document.createElement("img")
        let div_btn = document.createElement("div")
        let ecurie = document.createElement("p")
        let nom_voiture = document.createElement("p")
        let i = document.createElement("img")
        
        d.className = "element"
        div_btn.className = "div_btn" 
        d.id = e
        
        // nom_voiture.id = v
        e++
        
        
        btn_suppr.type = "button"
        btn_mod.type = "button"
        
        btn_suppr.id = "suppression"
        btn_mod.id = "modifier"
        
        btn_mod.setAttribute('src','./images/icones/modifier.png')
        btn_mod.setAttribute("onclick", "modify()")
        
        btn_suppr.setAttribute('src','./images/icones/delete.png')
        btn_suppr.setAttribute("onclick", "document.getElementById(\""+d.id+"\").remove()")
    
        ecurie.textContent = document.getElementById("equipe").value
        nom_voiture.textContent = document.getElementById("car_name").value
        
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
        
        d.appendChild(i)
        d.appendChild(ecurie)
        d.appendChild(nom_voiture)
        d.appendChild(div_btn)
        div_btn.appendChild(btn_mod)
        div_btn.appendChild(btn_suppr)
        document.getElementById("voitures").appendChild(d)
        
        
        data.push({
            ecurie: equipe.value,
            nom_voiture: car_name.value,
        });
        localStorage.setItem("key", JSON.stringify(data))
        // console.log(data)
    }
}


// local storage
window.onload = function(){
    let index = localStorage.length
    while (index < key){
        
        nom_voiture.textContent = localStorage.getItem("key",data)

    }
}

// permet de modifier le nom de la voiture
function modify(){
    let new_name = document.createElement("input")
    d.appendChild(new_name)
    new_name.type = "text"
    new_name.id = "nouveau_nom"
    
    
}

// mise en place API

function fullscreen(){
    document.documentElement.requestFullscreen()
}

document.getElementById('result').innerHTML = navigator.deviceMemory || 'unknown'
