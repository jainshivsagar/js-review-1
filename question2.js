// Task 3:
// Calculate the average year_1 return rate for each fund house

const fetch = require("node-fetch");
const fs = require("fs");

function main() {
  const fileName1 = "./result/output1.json";
  const fileName2 = "./result/question2.json";

  const buffer = fs.readFile(fileName1, "utf8", (error, data) => {
    const records = JSON.parse(data);

    const obj = new Object();

    records.forEach((fund) => {
      if (fund.fund_house in obj) {
        if (fund.category in obj[fund.fund_house]) {
          obj[fund.fund_house][fund.category] += 1;
        } else {
          obj[fund.fund_house][fund.category] = 1;
        }
      } else {
        obj[fund.fund_house] = {};
        obj[fund.fund_house][fund.category] = 1;
      }
    });
    fs.writeFile(fileName2, JSON.stringify(obj, null, " "), () => {
      console.log("Done");
    });
  });
}

main();
