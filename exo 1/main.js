// cibler le bouton en html
const button = document.querySelector("button");

// au clique sur le bouton
button.addEventListener("click", () => {
    // creer une balise article
    const articleElement = document.createElement("article");

    // je cible l'element root dans l'html
    divRoot = document.querySelector("#root");

    // je l'insere dans la div root
    divRoot.appendChild(articleElement);

    // avec un titre
    const titleElement = document.createElement("h2");
    titleElement.textContent = "belle image";
    articleElement.appendChild(titleElement);

    // une image
    const imgElement = document.createElement("img");
    imgElement.setAttribute(
        "src",
        "https://images.pexels.com/photos/17299063/pexels-photo-17299063/free-photo-of-bois-paysage-campagne-colline.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        )
    articleElement.appendChild(imgElement);
    imgElement.style.hwidth = "300px";

    // un paragraphe
    const textElement = document.createElement("p");
    textElement.textContent = "je suis belle image";
    articleElement.appendChild(textElement);

});
