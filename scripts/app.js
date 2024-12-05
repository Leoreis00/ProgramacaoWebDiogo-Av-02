document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  
  contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Armazenando dados no Local Storage
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      localStorage.setItem('contactData', JSON.stringify({ name, email, message }));

      alert("Formulário enviado!");
      contactForm.reset(); // Resetando o formulário após o envio
  });
});
