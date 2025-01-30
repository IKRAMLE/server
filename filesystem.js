// importing build-in fs module in Node.js, which provides utilities to interact

var fs = require('fs');

// create a file colled welcome.txt

fs.writeFile('welcome.txt', 'Hello Node', (error) => {
  if (error) {
    console.error("Error creating file:", error);
    return;
  }
  console.log("welcome.txt created successfully");

  //   Reading the content of welcome.txt

  fs.readFile("welcome.txt", (error, data) => {
    if (error) {
      console.error("Error reading file:", error);
      return;
    }
    console.log("File content:", data.toString());
  });
});
