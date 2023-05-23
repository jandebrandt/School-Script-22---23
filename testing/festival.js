// Maak een variabele aan voor de knop in de header
const navToggle = document.querySelector('.nav-toggle');

// Voeg een event listener toe aan de knop om het menu te openen en te sluiten
navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('nav-menu--visible');
});

// Maak een variabele aan voor de datumselectie op de tickets pagina
const dateSelect = document.querySelector('#date-select');

// Voeg een event listener toe aan de datumselectie om de geselecteerde datum in de console te loggen
dateSelect.addEventListener('change', () => {
    console.log(`Geselecteerde datum: ${dateSelect.value}`);
});
