
const projetsBtn = document.getElementById("projetsBtn");

if (projetsBtn) {
  
  projetsBtn.addEventListener("click", function() {
    
    window.location.href = "projets.html";
    
  });
  
}


const contactsBtn = document.getElementById("contactsBtn");

const contactBox = document.getElementById("contactBox");

const fermerContact = document.getElementById("fermerContact");

const overlay = document.getElementById("overlay");

if (contactsBtn) {
  
  contactsBtn.addEventListener("click", function() {
    
    contactBox.classList.add("active");
    
    overlay.style.display = "block";
    
  });
  
}

if (fermerContact) {
  
  fermerContact.addEventListener("click", function() {
    
    contactBox.classList.remove("active");
    
    overlay.style.display = "none";
    
  });
  
}

if (overlay) {
  
  overlay.addEventListener("click", function() {
    
    contactBox.classList.remove("active");
    
    overlay.style.display = "none";
    
  });
  
}


const menuBtn = document.getElementById("menuBtn");

const menu = document.querySelector(".niveau1");

if (menuBtn && menu) {
  
  menuBtn.addEventListener("click", function() {
    
    menu.classList.toggle("active");
    
  });
  
}


const liensMenu = document.querySelectorAll(".niveau1 a");

liensMenu.forEach(function(lien) {
  
  lien.addEventListener("click", function() {
    
    menu.classList.remove("active");
    
  });
  
});


const projets = document.querySelectorAll(".projet");

projets.forEach(function(projet, index) {
  
  projet.style.opacity = "0";
  
  projet.style.transform = "translateY(30px)";
  
  setTimeout(function() {
    
    projet.style.opacity = "1";
    
    projet.style.transform = "translateY(0)";
    
  }, index * 200);
  
});

const boutonsCommande = document.querySelectorAll(".commande");

boutonsCommande.forEach(function(bouton) {
  
  bouton.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    const plat = bouton.dataset.plat;
    
    const prix = bouton.dataset.prix;
    
    const message =
      
      "Bonjour, je voudrais commander " +
      
      plat +
      
      " à " +
      
      prix +
      
      " FCFA.";
    
    const numero = "242067465835";
    
    const lien =
      
      "https://wa.me/" +
      
      numero +
      
      "?text=" +
      
      encodeURIComponent(message);
    
    window.location.href = lien;
    
  });
  
});


const boutonsAcheter = document.querySelectorAll(".acheter");

boutonsAcheter.forEach(function(bouton) {
  
  bouton.addEventListener("click", function(event) {
    
    event.preventDefault();
    
    const produit = bouton.getAttribute("data-produit");
    const prix = bouton.getAttribute("data-prix");
    
    const message = "Bonjour, je voudrais acheter " + produit + " à " + prix + " FCFA.";
    
    const lien = "https://wa.me/242067465835?text=" + encodeURIComponent(message);
    
    window.location.href = lien;
    
  });
  
});