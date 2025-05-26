document.addEventListener("DOMContentLoaded", function () {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      data = data.results[0];
      document.getElementById("nome").textContent = `${data.name.first} ${data.name.last}`;
      document.querySelector("#genere ").innerHTML = `Sesso :` + ` ` + `${data.gender}`;
      document.getElementById("img").src = data.picture.large;
      document.getElementById(
        "indirizzo"
      ).textContent = `Indirizzo : ${data.location.street.name} ${data.location.street.number}, ${data.location.city}, ${data.location.state}, ${data.location.country}`;
      document.getElementById(
        "email"
      ).textContent = `Email : ${data.email}`;
      document.getElementById(
        "info"
      ).textContent = `Telefono : ${data.phone}`;
    })
    .catch((error) => console.error("Errore :", error));
});
