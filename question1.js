// Task 1:
// 1. Install node-fetch library
// 2. Using fetch, get the data from https://api.kuvera.in/api/v3/funds.json
// 3. Write this data to a file

const fetch = require("node-fetch");
const fs = require("fs");
function main() {
  const url = "https://api.kuvera.in/api/v3/funds.json";
  const fileName1 = "./result/output1.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      fs.writeFile(fileName1, JSON.stringify(data, null, " "), () => {
        console.log("Inside Callback");
      });
      console.log("done");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Process Finished.");
    });
}

main();
