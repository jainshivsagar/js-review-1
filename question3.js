// Task 3:
// Calculate the average year_1 return rate for each fund house

const fetch = require("node-fetch");
const fs = require("fs");

function main() {
  const fileName1 = "./result/output1.json";
  const fileName3 = "./result/question3.json";

  const buffer = fs.readFile(fileName1, "utf8", (error, data) => {
    const records = JSON.parse(data);

    const obj = new Object();

    records.forEach((fund) => {
      if (fund.fund_house in obj) {
        obj[fund.fund_house].year_1Sum += fund.returns.year_1
          ? parseInt(fund.returns.year_1)
          : 0;
        obj[fund.fund_house].total_funds += 1;
      } else {
        obj[fund.fund_house] = {};
        obj[fund.fund_house].year_1Sum = fund.returns.year_1
          ? parseInt(fund.returns.year_1)
          : 0;
        obj[fund.fund_house].total_funds = 1;
      }
    });

    const ans = new Object();

    for (let temp in obj) {
      ans[temp] = obj[temp].year_1Sum / obj[temp].total_funds;
    }

    fs.writeFile(fileName3, JSON.stringify(ans, null, " "), () => {
      console.log("done");
    });
  });
}

main();
