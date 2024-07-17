fetch("./demoData.json")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Error 101");
    }
    return res.json();
  })
  .catch();
