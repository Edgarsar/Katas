// Create a function named calculateChange that takes in a total amount of a bill and the total cash given to pay that bill.
// Return a new object that describes the total amount of change for the cashier to give back. 
// Omit any types of change that you shouldn't give back, i.e. if you don't give back a twenty dollar bill,
// don't include it in the results.
//  $10 will be represented as 1000.
// Valid denominations are as follows:
// Twenty dollars === 2000
// Ten dollars === 1000
// Five dollars === 500
// Two dollars === 200
// One dollar === 1000
// Quarter (25¢) === 25
// Dime (10¢) === 10
// Nickel (5¢) === 5
// Penny (1¢) ==== 1

const calculateChange = function (total, cash) {
  let changeObj = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    tenDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  let change = cash - total;
  for (let i = 0; i <= change; i++) {

    if (change >= 2000) {
      changeObj["twentyDollar"] += 1;
      change = change - 2000;
    }
    else if (change >= 1000) {
      changeObj["tenDollar"] += 1;
      change = change - 1000;
    }
    else if (change >= 500) {
      changeObj["fiveDollar"] += 1;
      change = change - 500;
    }
    else if (change >= 200) {
      changeObj["twoDollar"] += 1;
      change = change - 200;
    }
    else if (change >= 100) {
      changeObj["oneDollar"] += 1;
      change = change - 100;
    }
    else if (change >= 25) {
      changeObj["quarter"] += 1;
      change = change - 25;
    }
    else if (change >= 10) {
      changeObj["dime"] += 1;
      change = change - 10;
    }
    else if (change >= 5) {
      changeObj["nickel"] += 1;
      change = change - 5;
    }

    changeObj["penny"] = change;;

  }
  for (const key in changeObj){
    if (changeObj[key] === 0){
      delete changeObj[key];
    }
  }
  return changeObj
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));



