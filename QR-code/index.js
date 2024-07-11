const input = document.querySelector("#input");
const image = document.querySelector("#img-qr");

input.addEventListener("input", (event) => {
  image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${event.target.value}`;
});
