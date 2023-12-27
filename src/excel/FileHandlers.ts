import * as XLSX from "xlsx";

const handleFileUpload = (event) => {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;

      if (contents instanceof ArrayBuffer) {
        const workbook = XLSX.read(contents, { type: "array" });

        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        console.log("Uploaded data:", data);
      } else {
        console.error("Invalid data type. Expected ArrayBuffer.");
      }
    };

    reader.readAsArrayBuffer(file);
  }
};

export default handleFileUpload;
