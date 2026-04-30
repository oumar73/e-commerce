// le bouton pour voir le formulaire d'ajout de produit
const btn_ajouter_produit = document.querySelector(".btn_ajouter_produit");
// le        formulaire d'ajout de produit
const formulaire_ajouter_produit = document.querySelector(".formulaire_ajouter_produit");
// la div qui du formulaire qui va afficher l'image choisie
const div_image_choisie = document.querySelector(".div_image_choisie");
// les inputs du formulaire d'ajout de produit
const inputfile = document.querySelector(".inputfile");
const nom_du_produit = document.querySelector(".nom_du_produit");
const prix_du_produit = document.querySelector(".prix_du_produit");
const quantite_du_produit = document.querySelector(".quantite_du_produit");
// les boutons du formulaire d'ajout de produit (annuler et ajouter)
const btn_annuler_ajouter = document.querySelector(".btn_annuler_ajouter");
const btn_ajouter = document.querySelector(".btn_ajouter");
// le container qui contient tous les produits
const container_produits = document.querySelector(".container_produits");
// le container qui contient tous les produits du panier
const container_panier=document.querySelector(".container_panier");
// la section panier
const section_panier=document.querySelector(".panier");
// tous les bouton (ajouter au panier)
const btn_ajouter_panier=document.querySelectorAll(".btn_ajouter_panier");
// bouton pour voir le panier
const btn_voir_panier=document.querySelector(".btn_voir_panier");
// bouton pour masque le panier
const btn_masquer_panier=document.querySelector(".btn_masquer_panier");
// bouton pour vider tous le panier en un click
const btn_vider_panier=document.querySelector(".btn_vider_panier");
// la selection du container des produit dans la section administrateur
const container_administrateur=document.querySelector(".corps_administrateur");
const section_admin=document.querySelector(".administrateur");
const btn_deconnexion_admin=document.querySelector(".btn_deconnexion_admin");
btn_deconnexion_admin.addEventListener("click",()=>{
    section_admin.classList.add("hidden");
    formulaire_ajouter_produit.classList.add("hidden");
    formulaire_modifier_produit.classList.add("hidden");
})
// le bouton qui permet supprimer un porduit dans le container de l'admininitrateur
const btn_supprimer_produit_admin=document.querySelector(".btn_supprimer_produit_admin");
//              formulaire pour modifier un produit
const formulaire_modifier_produit=document.querySelector(".formulaire_modifier_produit");
// le bouton qui permet de modifier un produit en affichant le formulaire de modication
const btn_modifier_produit_admin=document.querySelectorAll(".btn_modifier_produit_admin");
// le bouton qui permet d'annuler (masquer) la modification d'un produit
const btn_annuler_modifier=document.querySelector(".btn_annuler_modifier");
// l'image modifiant un produit
const base64_modiantfile=document.querySelector(".base64Image_modiant");
// les inputs du formulaire modifiant un produit
const nom_du_produit_modifier=document.querySelector(".nom_du_produit_modifier");
const prix_du_produit_modifier=document.querySelector(".prix_du_produit_modifier");
const quantite_du_produit_modifier=document.querySelector(".quantite_du_produit_modifier");
// la div qui contient l'image choisi pour modifier l'image d'un produit
const div_image_choisie_modifier=document.querySelector(".div_image_choisie_modifier");
// selection de la page login(ce qui permet a l'administrateur d'acceder a son espace privé)
const section_login=document.querySelector(".login");
const login_email=document.querySelector(".login_email");
const login_nom=document.querySelector(".login_nom");
const btn_login_retour=document.querySelector(".login_retour");
const btn_voir_login=document.querySelector(".btn_voir_login");
btn_voir_login.addEventListener("click",()=>{
    section_login.classList.remove("hidden");
})
const btn_login_connecter=document.querySelector(".login_connecter");
const formulair_login=document.querySelector(".formulair_login");
formulair_login.addEventListener("submit",(e)=>{
    e.preventDefault();
})
// compte d'admin
const compte_admin={
    email:"email@gmail.com",
    nom:"Nom_admin"
}
// verification des données du formulair login avant l'accès a la page d'administrateur
btn_login_retour.addEventListener("click",()=>{
    section_login.classList.add("hidden");
})
btn_login_connecter.addEventListener("click",()=>{
    if (login_email.value===compte_admin.email && login_nom.value===compte_admin.nom){
        section_login.classList.add("hidden");
        section_admin.classList.remove("hidden");
    }
    else{
        alert("Connexion impossible, veillez réessayer")
    }
})
// le compteur du panier
const compteur_produit_panier=document.querySelectorAll(".compteur_produit_panier");

// programme bouton qui va afficher le formulaire d'ajout de produit
btn_ajouter_produit.addEventListener("click", () => {
    formulaire_ajouter_produit.classList.remove("hidden");
});
btn_annuler_ajouter.addEventListener("click",()=>{
    formulaire_ajouter_produit.classList.add("hidden");
    div_image_choisie.innerHTML=`<h1>Choisir une image</h1>`;
    nom_du_produit.innerHTML="";
    prix_du_produit.innerHTML="";
    quantite_du_produit.innerHTML="";
})
// programme du bouton qui va masquer le formulaire de modification et renitialiser ses valeur a defaut
btn_annuler_modifier.addEventListener("click",()=>{
    formulaire_modifier_produit.classList.add("hidden")
    div_image_choisie_modifier.innerHTML="";
    nom_du_produit_modifier.value="";
    prix_du_produit_modifier.value="";
    quantite_du_produit_modifier.value="";
    base64Image_modifiant="";
})
// programme qui permet de clicker sur la div pour choisir une image
div_image_choisie.addEventListener("click", () => {
    inputfile.click();
});
// programme qui permet de clicker sur la div pour choisir une image afin de pour modifier l'image d'un prdouit
div_image_choisie_modifier.addEventListener("click",()=>{
    base64_modiantfile.click();
})
// programme qui va empêcher le formulaire ajouter un produit de refresh la page
formulaire_ajouter_produit.addEventListener("submit", (e) => {
    e.preventDefault();
});
// programme qui va empêcher le formulaire de modification des produits de refresh la page
formulaire_modifier_produit.addEventListener("submit",(e)=>{
    e.preventDefault();
})

// le container qui contient la somme total (valeurs du boutique de l'administrateur)
const container_somme_total_admin=document.querySelector(".somme_total_admin");


// fonction qui va créer un produit et l'ajouter dans le container de l'administrateur
function ajout_produit_administrateur(produit){
    const administrateur_produit_ajouter=document.createElement("div");
    administrateur_produit_ajouter.classList.add("produit_ajouter_administrateur");
    administrateur_produit_ajouter.dataset.id=produit.id;
    administrateur_produit_ajouter.innerHTML=`
        <img src=${produit.image} alt="image ajouter par administrateur" width="200">
        <div class="pro_admin_nom_prix_quantite_bouton">
            <h2>${produit.nom_produit}</h2>
            <p>prix : <span>${produit.prix_produit} </span>$</p>
            <p>Quantité : <span>${produit.quantite_produit}</span> pièces</p>
            <p class="bouton_supprimer_modifier">
                <button class="btn_supprimer_produit_admin">Supprimer</button>
                <button class="btn_modifier_produit_admin">modifier</button>
            </p>
        </div>
    `;
    container_administrateur.appendChild(administrateur_produit_ajouter);    
}
// fonction qui va créer un produit et l'ajouter dans le container des produits dans la page d'accueil du site
function afficher_produit(produit){
    const produit_ajouter = document.createElement("div");
    // produit_ajouter.className="observateur2";
    produit_ajouter.classList.add("produit");
    produit_ajouter.dataset.id = produit.id;
    produit_ajouter.innerHTML = `
        <img src="${produit.image}" alt="Image du produit,nom,prix" width="200">
        <h4>${produit.nom_produit}</h4>
        <p>Prix: <span>${produit.prix_produit} €</span></p>
        <button class="btn_ajouter_panier">Ajouter au panier</button>
    `;
    container_produits.appendChild(produit_ajouter);
}
// la variable qui va stocker l'image choisie
let base64Image = "";
// programme qui va afficher l'image choisie dans la div
inputfile.addEventListener("change", () => {
    const file = inputfile.files[0];
    const reader = new FileReader();
    if (file){
        reader.readAsDataURL(file);
        reader.onload = () =>{
            base64Image = reader.result;
            const img = document.createElement("img");
            img.src = base64Image;
            img.alt = "Image du produit";
            img.width = 200;
            div_image_choisie.innerHTML = "";
            div_image_choisie.appendChild(img);
        }
    }
})
// la variable qui va stocker l'image qui doit modifier un produit
let base64Image_modifiant="";
base64_modiantfile.addEventListener("change",()=>{
    const file= base64_modiantfile.files[0];
    const reader=new FileReader();
    if (file){
        reader.readAsDataURL(file);
        reader.onload=()=>{
            base64Image_modifiant=reader.result;
            const img=document.createElement("img");
            img.src=base64Image_modifiant;
            img.alt="image modifiant un produit";
            div_image_choisie_modifier.innerHTML="";
            div_image_choisie_modifier.appendChild(img);

        }
    }
})
// tableau qui va stocker tous les produits
let listes_produits = [
    {nom_produit:"Air Jordan 4",prix_produit:100,quantite_produit:100,image:"image/fond_rouge.jpeg",id:1},
    {nom_produit:"Air Jordan 4",prix_produit:200,quantite_produit:100,image:"image/fond_rouge2.jpeg",id:2},
    {nom_produit:"Air Jordan 4",prix_produit:300,quantite_produit:100,image:"image/fond_blanc2.jpeg",id:3},
    {nom_produit:"Air Jordan 4",prix_produit:400,quantite_produit:100,image:"image/fond_blanc.jpeg",id:4}
    
];
// variable qui va contenir la somme total des produit de l'admin
// programme qui calcule et affiche la somme total des produit de l'admin
let somme_total_admin=0;
for (let i of listes_produits){
        somme_total_admin+=i.prix_produit*i.quantite_produit;
    }
container_somme_total_admin.textContent=somme_total_admin; 
// programme qui va recupérer les données du formulaire les soumettre a la fonction qui va créer un produit et l'ajouter dans le container des produits
btn_ajouter.addEventListener("click",()=>{
    if (!base64Image) return;
    const produit = {
        nom_produit: nom_du_produit.value,
        prix_produit: Number(prix_du_produit.value),
        quantite_produit: Number(quantite_du_produit.value),
        image: base64Image,
        id: Date.now()
    }
    listes_produits.push(produit);
    // appel de la fonction qui ajouter le produit dans la page d'administration (visible pour l'administrateur)
    ajout_produit_administrateur(produit);
    // appel de la fonction qui ajoute le produit dans la page visble pour le client
    afficher_produit(produit);
    // reinitialiser le formulaire
    div_image_choisie.innerHTML = "<h1>Choisir une image</h1>";
    nom_du_produit.value = "";
    prix_du_produit.value = "";
    quantite_du_produit.value = "";
    // mise a jour de la somme total de l'administrateur
    somme_total_admin+=produit.prix_produit*produit.quantite_produit;
    container_somme_total_admin.textContent=somme_total_admin;
    

})
// le tableau qui va stocker tous les produits du panier
let liste_produit_panier=[];
const somme_total_panier=document.querySelector(".somme_total_panier");
let valeur_total_panier=0;
// le prix total en fonction de la quantité du produit ajouter dans le panier
let prixtotal_produit_panier;
// programme qui permet d'ajouter un produit dans le panier au click du bouton ajouter au panier
container_produits.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn_ajouter_panier")){
        const produit_touched=e.target.closest(".produit");
        const id_produit_touched=Number(produit_touched.dataset.id);
        const donnee_produit_panier=listes_produits.find(el => el.id===id_produit_touched);
        // programme qui permet de verifier si un produit existe déja dans le panier
        const donne_produit_panier_existant=liste_produit_panier.find(el=>el.id===id_produit_touched);
        if(donne_produit_panier_existant){
            donne_produit_panier_existant.quantite_produit++;
            const produit_panier_existant=container_panier.querySelector(`.produit_panier[data-id="${id_produit_touched}"]`);
            produit_panier_existant.querySelector(".quantite_produit_panier").textContent=donne_produit_panier_existant.quantite_produit;
            prixtotal_produit_panier=donne_produit_panier_existant.quantite_produit*donne_produit_panier_existant.prix_produit;
            produit_panier_existant.querySelector(".prixtotal_produit_panier").textContent=prixtotal_produit_panier+" €";
            // mise  a jour de la valeur du panier
            valeur_total_panier=0;
            for( let i of liste_produit_panier){
                valeur_total_panier+=i.quantite_produit*i.prix_produit;
            }
            somme_total_panier.textContent=valeur_total_panier;
            
            
        }
        // si le produit n'existe pas, on l'ajoute normalement
        else {
            donnee_produit_panier.quantite_produit=1;
            liste_produit_panier.push(donnee_produit_panier);
            // programme utilisant les données du produit touché pour ajouter le produit dans le container du panier
            const produit_ajouter_panier=document.createElement("div");
            produit_ajouter_panier.classList.add("produit_panier");
            produit_ajouter_panier.dataset.id=id_produit_touched;
            produit_ajouter_panier.innerHTML=`
                <img src=${donnee_produit_panier.image} alt="simple design panier" width="300">
                <ul class="nom_prix_quantite_bouton">
                    <li class="nom_prix">
                        <h3>${donnee_produit_panier.nom_produit}</h3>
                        <h3>Prix : ${donnee_produit_panier.prix_produit} €</h3>
                    </li>
                    <li class="quantite_plus_moins">
                        <h3>Quantité</h3>
                        <span class="quantite_produit_panier">1</span>
                        <p>
                            <button class="btn_produit_panier_moin">-</button>
                            <button class="btn_produit_panier_plus">+</button>
                        </p>
                    </li>
                    <li class="prix_total">
                        <p>Prix total:</p>
                        <span class="prixtotal_produit_panier"></span>
                    </li>
                    <li class="li_bouton">
                        <button class="btn_supprimer_panier">Supprimer</button>
                        <button class="btn_commender">Commander</button>
                    </li>
                </ul>
            `;
            container_panier.appendChild(produit_ajouter_panier);
            prixtotal_produit_panier=donnee_produit_panier.quantite_produit*donnee_produit_panier.prix_produit;
            produit_ajouter_panier.querySelector(".prixtotal_produit_panier").textContent=prixtotal_produit_panier +" €";
            // mise a jour de la valeur du panier
            valeur_total_panier+=donnee_produit_panier.prix_produit;
            somme_total_panier.textContent=valeur_total_panier;
            
        }
            // compter du panier
        compteur_produit_panier.forEach(el => el.textContent=liste_produit_panier.length); 
    }
    
})
// programme qui permet de modifier la quantité d'un produit dans le panier
container_panier.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn_produit_panier_plus")){
        const produit_panier_touched=e.target.closest(".produit_panier");
        const id_produit_panier_touched=Number(produit_panier_touched.dataset.id);
        const donne_produit_panier_touched=liste_produit_panier.find(el => el.id ===id_produit_panier_touched);
        // modification de la quantite du produit dans le tableau du panier
        donne_produit_panier_touched.quantite_produit++;
        // modification visuellement
        produit_panier_touched.querySelector(".quantite_produit_panier").textContent=donne_produit_panier_touched.quantite_produit;
        // modification du total (prix) au click du bouton +
        prixtotal_produit_panier=donne_produit_panier_touched.quantite_produit*donne_produit_panier_touched.prix_produit;
        produit_panier_touched.querySelector(".prixtotal_produit_panier").textContent=prixtotal_produit_panier+" €";
        // mise  a jour de la valeur du panier
        valeur_total_panier=0;
        for( let i of liste_produit_panier){
            valeur_total_panier+=i.quantite_produit*i.prix_produit;
        }
        somme_total_panier.textContent=valeur_total_panier;

        
    }
    else if((e.target.classList.contains("btn_produit_panier_moin"))){
        const produit_panier_touched=e.target.closest(".produit_panier");
        const id_produit_panier_touched=Number(produit_panier_touched.dataset.id);
        const donne_produit_panier_touched=liste_produit_panier.find(el => el.id ===id_produit_panier_touched);
        // modification de la quantite du produit dans le tableau du panier
        if (donne_produit_panier_touched.quantite_produit>1){
            donne_produit_panier_touched.quantite_produit--;
        }
        // modification visuellement
        produit_panier_touched.querySelector(".quantite_produit_panier").textContent=donne_produit_panier_touched.quantite_produit;
        // modification du total (prix) au click du bouton +
        prixtotal_produit_panier=donne_produit_panier_touched.quantite_produit*donne_produit_panier_touched.prix_produit;
        produit_panier_touched.querySelector(".prixtotal_produit_panier").textContent=prixtotal_produit_panier+" €";
        // mise  a jour de la valeur du panier
        valeur_total_panier=0;
        for( let i of liste_produit_panier){
            valeur_total_panier+=i.quantite_produit*i.prix_produit;
        }
        somme_total_panier.textContent=valeur_total_panier;
        
    }
})
// programme qui supprime un produit dans le panier
container_panier.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn_supprimer_panier")){
        const produit_touched=e.target.closest(".produit_panier");
        const id_produit_touched=Number(produit_touched.dataset.id);
        // suppresion du tableau du panier
        liste_produit_panier=liste_produit_panier.filter(el => el.id !== id_produit_touched);
        // suppression dans le dom
        produit_touched.remove();
        // compteur du panier
        compteur_produit_panier.forEach(el => el.textContent=liste_produit_panier.length);
        // recalculer la valeur du panier
        valeur_total_panier=0;
        for( let i of liste_produit_panier){
            valeur_total_panier+=i.quantite_produit*i.prix_produit;
        }
        somme_total_panier.textContent=valeur_total_panier;  
    }
})
// programme du bouton qui permet de voir le panier
btn_voir_panier.addEventListener("click",(e)=>{
    e.stopPropagation();
    section_panier.classList.remove("hidden");
})
// programme qui permet de masque le panier au click du homme
btn_masquer_panier.addEventListener("click",()=>{
    section_panier.classList.add("hidden")
})
// programme du bouton qui vide tout le panier en un click
btn_vider_panier.addEventListener("click",()=>{
    container_panier.innerHTML="";
    liste_produit_panier.length=0;
    somme_total_panier.textContent=0;
    compteur_produit_panier.forEach(el => el.textContent=0);
    valeur_total_panier=0;

})
// programme qui permet de supprimer un produit dans le container de l'administrateur 
container_administrateur.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn_supprimer_produit_admin")) {
        const produit_touched=e.target.closest(".produit_ajouter_administrateur");
        const id_produit_touched=Number(produit_touched.dataset.id);
        // les donnés du produit à supprimer
        const produit_supprime=listes_produits.find(el => el.id===id_produit_touched);
        // mise a jour de la somme total de 'administrateur
        somme_total_admin-=produit_supprime.prix_produit*produit_supprime.quantite_produit;
        container_somme_total_admin.textContent=somme_total_admin;
        // suppression du produit dans le tableau contenant tous les produit
        listes_produits=listes_produits.filter(el => el.id !== id_produit_touched);
        // suppression du produit dans le container de l'administrateur 
        produit_touched.remove();
        // suppression dans le site cóté client
        const produit_client=container_produits.querySelector(`.produit[data-id="${id_produit_touched}"]`);
        if (produit_client) produit_client.remove(); 
    }           
})
// programme qui peremet de modifier un prodifier au click du bouton modifier dans le container de l'admin
let id_produit_modifier;
container_administrateur.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn_modifier_produit_admin")){
        formulaire_modifier_produit.classList.remove("hidden")
        const produit_touched= e.target.closest(".produit_ajouter_administrateur");
        const id_produit_touched=Number(produit_touched.dataset.id);
        id_produit_modifier=id_produit_touched;
        div_image_choisie_modifier.innerHTML="";
        // trouver l'index du produit dans la liste de tous les produits
        const index_produit_touched=listes_produits.findIndex(el => el.id===id_produit_touched);
        const image_modifiant=document.createElement("img");
        image_modifiant.src=listes_produits[index_produit_touched].image;
        div_image_choisie_modifier.appendChild(image_modifiant);
        nom_du_produit_modifier.value=listes_produits[index_produit_touched].nom_produit;
        prix_du_produit_modifier.value=listes_produits[index_produit_touched].prix_produit;
        quantite_du_produit_modifier.value=listes_produits[index_produit_touched].quantite_produit;
        // recuperation de l'image du produit a mofier si l'admin le veut
        base64Image_modifiant=image_modifiant.src;
    }
})
// programme du bouton enregistrer les données les modifiaction du produit enregistré au click du bouton enregistrer
formulaire_modifier_produit.addEventListener("click",(e)=>{
    if (e.target.classList.contains("btn_enregister")){
        // le produit a modifier dans le container de l'administrateur
        const produit_touched_admin=container_administrateur.querySelector(`.produit_ajouter_administrateur[data-id="${id_produit_modifier}"]`);
        // Recuperation des données du produit a modifier dans le tableau contenant tous les produits
        const donnee_produit_modifier=listes_produits.find(el => el.id ===id_produit_modifier);
        // modification du produit dans le tableau
        donnee_produit_modifier.image=base64Image_modifiant;
        donnee_produit_modifier.nom_produit=nom_du_produit_modifier.value;
        donnee_produit_modifier.prix_produit=Number(prix_du_produit_modifier.value);
        donnee_produit_modifier.quantite_produit=Number(quantite_du_produit_modifier.value);
        // modification du produit dans le container de l'admin
        produit_touched_admin.innerHTML=`
            <img src=${donnee_produit_modifier.image} alt="image ajouter par administrateur" width="200">
            <div class="pro_admin_nom_prix_quantite_bouton">
                <h2>${donnee_produit_modifier.nom_produit}</h2>
                <p>prix du <span>${donnee_produit_modifier.prix_produit} $</span></p>
                <p>Quantité : <span>${donnee_produit_modifier.quantite_produit}</span> pièces</p>
                <p class="bouton_supprimer_modifier">
                    <button class="btn_supprimer_produit_admin">suprimer</button>
                    <button class="btn_modifier_produit_admin">modifier</button>
                </p>
            </div>
        `;
        // modification du même produit cette fois dans le container des produit pour le clien
        const produit_touched_container_clien=container_produits.querySelector(`.produit[data-id="${id_produit_modifier}"]`);
        produit_touched_container_clien.innerHTML=`
            <img src=${donnee_produit_modifier.image} alt="" width="200">
            <h4>${donnee_produit_modifier.nom_produit}</h4>
            <p>Prix: <span>${donnee_produit_modifier.prix_produit} €</span></p>
            <button class="btn_ajouter_panier">Ajouter au panier</button>
        `;
        // masquer le formulaire et le remettre neuf pour une prochaine utilisation (eviter les beugs)
        formulaire_modifier_produit.classList.add("hidden");
            div_image_choisie_modifier.innerHTML="";
            nom_du_produit_modifier.value="";
            prix_du_produit_modifier.value="";
            quantite_du_produit_modifier.value="";
            base64Image_modifiant="";
    }
    // mise a jour de la somme total de 'administrateur
    somme_total_admin=0;
    for (let i of listes_produits){
        somme_total_admin+=i.quantite_produit*i.prix_produit;
    }  
    container_somme_total_admin.textContent=somme_total_admin;
})

//Responsive design  
// fonction qui permet de verifier la largeur de la fénètre pour le responsive du header
const btn_navbarre=document.querySelector(".btn_navbarre");

const nav_barre=document.querySelector(".nav_barre");



function verifier_largeur(){
    if (window.innerWidth<=600){
        nav_barre.classList.add("hidden");
        btn_navbarre.classList.remove("hidden");

    }
    else{
        nav_barre.classList.remove("hidden");
        btn_navbarre.classList.add("hidden");
    }
}
document.addEventListener("DOMContentLoaded",
    verifier_largeur()
)
window.addEventListener("resize",verifier_largeur);
btn_navbarre.addEventListener("click",()=>{
    nav_barre.classList.toggle("hidden");
})
// animation au scroll
const observateur1=new IntersectionObserver(entrys=>{
    entrys.forEach(entry =>{
        if (entry.isIntersecting){
            entry.target.classList.add("show1");
        }
        // else{
        //     entry.target.classList.remove("show1");
        // }
    })
})
const elements_observateur1=document.querySelectorAll(".observateur1");
elements_observateur1.forEach(el => observateur1.observe(el));
// programme qui fait disparaitre le header au scroll vers le bas et faire apparaitre au scroll vers le haut
const header_tete=document.querySelector(".header_tete");
let dernier_scroll=0;
window.addEventListener("scroll",()=>{
    if (window.scrollY>dernier_scroll){
        header_tete.style.top="-80px";
        header_tete.style.transition="1s";
    }
    else{
        header_tete.style.top="0";
        header_tete.style.transition="1s";
    }
    dernier_scroll=window.scrollY;
})
// bouton pour remonter en haut
const btn_remonter=document.querySelector(".btn_remonter");
console.log(btn_remonter);
window.addEventListener("scroll",()=>{
    if(window.scrollY>200){
        btn_remonter.classList.remove("hidden");
    }
    else{
        btn_remonter.classList.add("hidden");
    }
})
btn_remonter.addEventListener("click",()=>{
   window.scrollTo({
        top:0,
        behavior:"smooth"
   })
})
const observateur2= new IntersectionObserver(entrys =>{
    entrys.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show2")
        }
        // else{
        //     entry.target.classList.remove("show2")
        // }
    })
})
const element_observateur2=document.querySelectorAll(".observateur2");
element_observateur2.forEach(el => observateur2.observe(el));
