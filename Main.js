import readFile from "./ReadFile.js";
import writeFile from "./WriteFile.js";
import appendFile from "./AppendFile.js";
import deleteFile from "./DeleteFile.js";

const filename = "employee.json";
const fileContent = {"name":"Employee 2" , "salary":"2432"};

/** WRİTE FILE */
//  writeFile(filename, '[{"name":"employee 1","salary":"2000"}]');

/** READ FILE */
readFile(filename);

/** APPEND FILE */

 appendFile(filename, fileContent);

/** DELETE FILE */
// deleteFile(filename);
