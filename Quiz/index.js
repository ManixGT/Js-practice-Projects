async function fetchData() {
  const response = await fetch("./demoData.json");
  const data = await response.json();
  console.log(data); // Data ko dekhne aur use karne ke liye
  processData(data); // Data ko kisi function ko bhejna
}

function processData(fetchedData) {
  console.log("Data:", fetchedData);
}

fetchData();
