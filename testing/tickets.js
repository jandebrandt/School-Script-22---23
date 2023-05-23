const ticketForm = document.querySelector('#ticket-form');
const buyButton = document.querySelector('#buy-button');

ticketForm.addEventListener('submit', (event) => {
	event.preventDefault();
	const nameInput = document.querySelector('#name-input');
	const emailInput = document.querySelector('#email-input');
	const dateSelect = document.querySelector('#date-select');
	const ticketType = document.querySelector('#ticket-type');

	const emailBody = `Naam: ${nameInput.value}\nE-mailadres: ${emailInput.value}\nDatum: ${dateSelect.value}\nTicket type: ${ticketType.value}`;

	fetch('send_email.php', {
		method: 'POST',
		body: new FormData(ticketForm)
	})
	.then(response => {
		if (response.ok) {
			alert('Bedankt voor je aankoop!');
			ticketForm.reset();
            window.location = 'festival.html';
		} else {
			alert('Er is iets fout gegaan. Probeer het later opnieuw.');
		}
	})
	.catch(error => console.error(error));
});
