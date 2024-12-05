// App JavaScript
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        console.log("Formulário enviado", Object.fromEntries(formData.entries()));
        alert("Mensagem enviada com sucesso!");
    });
});
