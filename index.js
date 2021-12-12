"use strict";
import excelToJson from "convert-excel-to-json";
const result = (path) => excelToJson({ sourceFile: path });
console.log(result("./ex.xlsx"));
