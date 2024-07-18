let data;

const response = fetch("./demoData.json");
response
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log(data);
  });
