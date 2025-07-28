// On thankyou.html
const resultBox = document.querySelector('#results');
if (resultBox) {
    const membershipInfo = new URLSearchParams(window.location.search);
    resultBox.innerHTML = `
      <p><strong>Name:</strong> ${membershipInfo.get('first')} ${membershipInfo.get('last')}</p>
      <p><strong>Organizational Title:</strong> ${membershipInfo.get('orgtitle')}</p>
      <p><strong>Email:</strong> ${membershipInfo.get('email')}</p>
      <p><strong>Phone:</strong> ${membershipInfo.get('phone')}</p>
      <p><strong>Organization:</strong> ${membershipInfo.get('organization')}</p>
      <p><strong>Membership Level:</strong> ${membershipInfo.get('membership')}</p>
      <p><strong>Description:</strong> ${membershipInfo.get('description')}</p>
      <p><strong>Timestamp:</strong> ${membershipInfo.get('timestamp')}</p>
    `;
}

// On join.html
const formTimestamp = document.querySelector("#timestamp");
if (formTimestamp) {
    formTimestamp.value = new Date().toLocaleString();
}
