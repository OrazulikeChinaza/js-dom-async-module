function fetchDataWithCallback(callback) {
    let error = false;
  
    setTimeout(function () {
      try {
        if (error) {
          throw new Error("Fetch failed");
        } else {
          callback("Data fetched");
        }
      } catch (err) {
        console.error("Error:", err.message);
      }
    }, 2000);
  }
  
  fetchDataWithCallback(function (data) {
    console.log(data);
  });
  