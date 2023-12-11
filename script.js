const scriptURL =
  "https://script.google.com/macros/s/AKfycbxiUsPtS6QsoxkwvOdzLAzbgqxudCdw1r2qHRfAISznkWsnol0npdMoH2p8sQDbQZU1aQ/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => alert("Thank you! your form is submitted successfully."))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
