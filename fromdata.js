
const form1 = document.forms['doneit']
form1.addEventListener('submit', e => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyXXD1bRojXDyBYUhpobjcMO0TKA00FZpPZkrHsFX6XqQo0Vt41DNr_NGll4gehhfQ_/exec'

    alert("Thank you! your form is submitted successfully." );

  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
});

const form = document.forms['form222']

form.addEventListener('submit', e => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbztsY83J5i9qrwUFnvT4mC5zyzi3z9UO8EuhWvKATKfSDvelAPkP3OdyInIIND9by1XWQ/exec'

    
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  alert("Thank you! your form is submitted successfully." );
});
