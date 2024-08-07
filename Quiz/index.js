function fetchJSONData() {
  fetch("./demoData.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status} `);
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Error"));
}
