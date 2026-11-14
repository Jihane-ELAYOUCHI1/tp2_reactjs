
// ========================================
// PARTIE 1 : INTÉGRATION JAVASCRIPT / HTML
// ========================================

// 1. Récupérer les éléments HTML
const message = document.getElementById("message");
const btnMessage = document.getElementById("btnMessage");
const nouvelElement = document.getElementById("nouvelElement");

// 2. Modifier le texte lorsque le bouton est cliqué
btnMessage.addEventListener("click", function () {
    message.textContent = "Bonjour ! Vous avez cliqué sur le bouton.";
});

// 3. Créer un nouveau paragraphe avec JavaScript
const nouveauParagraphe = document.createElement("p");

nouveauParagraphe.textContent =
    "Ceci est un nouveau paragraphe créé avec JavaScript !";

// Ajouter le paragraphe dans le div
nouvelElement.appendChild(nouveauParagraphe);


// ========================================
// PARTIE 2 : FORMULAIRE ET VALIDATION
// ========================================

// 1. Récupérer les éléments du formulaire
const myForm = document.getElementById("myForm");
const champNom = document.getElementById("nom");
const champEmail = document.getElementById("email");

const erreur = document.getElementById("erreur");
const succes = document.getElementById("succes");

// 2. Écouter la soumission du formulaire
myForm.addEventListener("submit", function (event) {

    // Empêcher le comportement normal du formulaire
    event.preventDefault();

    // Effacer les anciens messages
    erreur.textContent = "";
    succes.textContent = "";

    // Récupérer les valeurs saisies
    const nom = champNom.value.trim();
    const email = champEmail.value.trim();

    try {

        // Vérifier si le nom est vide
        if (nom === "") {
            throw new Error("Veuillez saisir votre nom.");
        }

        // Vérifier si l'email est vide
        if (email === "") {
            throw new Error("Veuillez saisir votre adresse email.");
        }

        // Vérifier le format de l'email
        if (!champEmail.checkValidity()) {
            throw new Error("Veuillez saisir une adresse email valide.");
        }

        // Si toutes les validations sont réussies
        succes.textContent =
            "Formulaire soumis avec succès ! Bonjour " + nom + ".";

        // Afficher les données dans la console
        console.log("Nom :", nom);
        console.log("Email :", email);

    } catch (error) {

        // Afficher le message d'erreur
        erreur.textContent = error.message;

        console.error("Erreur :", error.message);
    }

});
