const fs = require("fs");

module.exports = {
  generateBuildId: () => {
    const id = fs.readFileSync(process.cwd() + "/BUILD_ID", "utf8");
    console.log("Build id: ", id);
    return id;
  }
};
