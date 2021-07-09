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

/*


{
 "TAURUSMUTUALFUND_MF": {
  "Equity": 21,
  "ELSS": 2,
  "year_1_sum":105,
  "total_funds":25
 }


{
    ICICI:{
        year_1_avg:19.17,
    },
    SBI:{
        year_1_avg:17.17,
    }
}

{
    ICICI:19.17,
    SBI:17.17,
}

*/
