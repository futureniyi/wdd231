// On thanks.html
const formTimestamp = document.querySelector("#timestamp");
if (formTimestamp) {
    formTimestamp.value = new Date().toLocaleString();
}


const getSubmission = document.querySelector('#results')

if (getSubmission) {
    const supportTicket = new URLSearchParams(window.location.search);

    function safeText(param) {
        return supportTicket.get(param) || '';
    }

    const lastNameToShow = safeText('maiden').trim() !== '' ? safeText('maiden') : safeText('last');

    getSubmission.innerHTML = `
    <div class="submission-response">
      <p>Hello ${safeText('first')} ${lastNameToShow},</p>
      <p>Thank you for reaching out. We appreciate your patience and will get back to you shortly.</p>

      <br>

      <h3>Here is your submitted message:</h3>
      <p><strong>Message:</strong> ${safeText('message')}</p>
      <p><strong>Timestamp:</strong> ${safeText('timestamp')}</p>

      <br>
      <p><strong>Your Details:</strong>
      <p><strong>Name:</strong> ${safeText('first')} ${lastNameToShow}</p>
      <p><strong>Email:</strong> ${safeText('email')}</p>
      <p><strong>Phone:</strong> ${safeText('phone')}</p>
    </div>
  `;
}

// Visitor message using localStorage
const messageElement = document.getElementById('visit-message');

if (messageElement) {
  const now = Date.now();
  const msToDays = 1000 * 60 * 60 * 24;
  const lastSubmission = localStorage.getItem('lastSubmission');
  let message = '';

  if (!lastSubmission) {
    message = "Thank you for your first ticket submission!";
  } else {
    const daysSince = Math.floor((now - Number(lastSubmission)) / msToDays);
    if (daysSince < 1) {
      message = "You submitted a ticket less than a day ago. Thanks again!";
    } else if (daysSince === 1) {
      message = "You last submitted a ticket 1 day ago.";
    } else {
      message = `You last submitted a ticket ${daysSince} days ago.`;
    }
  }

  messageElement.textContent = message;
  localStorage.setItem('lastSubmission', now);
}





