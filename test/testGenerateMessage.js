const messages = require("../src/generateMessage.js");
const assert = require("assert");

describe("generateQueryMessage", function() {
  it("should generate the query message for which user wants details", function() {
    const queryDetails = ["orange,1,24/11/2019"];
    const actual = messages.generateQueryMessage("25348", queryDetails, "3");
    const expected =
      "Employee ID, Beverage, Quantity, Date\n25348,orange,1,24/11/2019\nTotal:3 juices";
    assert.strictEqual(actual, expected);
  });
});

describe("generateSaveMessage", function() {
  it("should return transaction of specific user", function() {
    const userArguments = [
      "--save",
      "--beverage",
      "Orange",
      "--empId",
      "11111",
      "--qty",
      "1"
    ];
    const actual = messages.generateSaveMessage(userArguments, "24/11/2019");
    const expected =
      "Transaction Recorded:\nEmployee ID,Beverage,Quantity,Date\n11111,Orange,1,24/11/2019";
    assert.strictEqual(actual, expected);
  });
});
