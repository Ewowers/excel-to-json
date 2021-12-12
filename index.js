"use strict";
import excelToJson from "convert-excel-to-json";
import express from "express";
import path from "path";
const result = (path) => excelToJson({ sourceFile: path }); // парсинг
const app = express();
app.get("/api/excel/:id", (req, res) => {
  const { id } = req.params; //название файла
  const excel = path.join("excels", id + ".xlsx"); // пусть к файлу
  res.json(result(excel)); // отдает json
});
app.listen(5000);
