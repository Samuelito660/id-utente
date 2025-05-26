document.addEventListener("DOMContentLoaded", function () {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      data = data.results[0];
      document.getElementById(
        "user-name"
      ).textContent = `${data.name.first} ${data.name.last}`;
      document.querySelector("#user-gender ").innerHTML =
        `Sesso:` + ` ` + `${data.gender}`;
      document.getElementById("user-photo").src = data.picture.large;
      document.getElementById(
        "user-address"
      ).textContent = `Indirizzo: ${data.location.street.name} ${data.location.street.number}, ${data.location.city}, ${data.location.state}, ${data.location.country}`;
      document.getElementById(
        "user-email"
      ).textContent = `Email: ${data.email}`;
      document.getElementById(
        "user-other-info"
      ).textContent = `Telefono: ${data.phone}`;
    })
    .catch((error) => console.error("Errore:", error));
});
