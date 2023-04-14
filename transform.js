var updated_data = new Set();

function Convertion(csvRow) {
  var rowArray = csvRow.split(",");

  // Duplicate handling
  if (updated_data.has(rowArray[0])) {
    return null;
  }
  updated_data.add(rowArray[0]);

  var obj = {};

  // Missing value handling
  if (rowArray[0] === "") {
    return null;
  } else {
    obj.id = parseInt(rowArray[0].trim());
    // Corrupt data handling
    if (isNaN(obj.id)) {
      return null;
    }
  }
  if (rowArray[1] === "") {
    return null;
  } else {
    obj.Open = parseFloat(rowArray[1].trim());
    // Corrupt data handling
    if (isNaN(obj.Open)) {
      return null;
    }
  }
  if (rowArray[2] === "") {
    return null;
  } else {
    obj.High = parseFloat(rowArray[2].trim());
    // Corrupt data handling
    if (isNaN(obj.High)) {
      return null;
    }
  }
  if (rowArray[3] === "") {
    return null;
  } else {
    obj.Low = parseFloat(rowArray[3].trim());
    // Corrupt data handling
    if (isNaN(obj.Low)) {
      return null;
    }
  }
  if (rowArray[4] === "") {
    return null;
  } else {
    obj.Close = parseFloat(rowArray[4].trim());
    // Corrupt data handling
    if (isNaN(obj.Close)) {
      return null;
    }
  }
  if (rowArray[5] === "") {
    return null;
  } else {
    obj.Adj_Close = parseFloat(rowArray[5].trim());
    // Corrupt data handling
    if (isNaN(obj.Adj_Close)) {
      return null;
    }
  }
  if (rowArray[6] === "") {
    return null;
  } else {
    obj.Volume = parseInt(rowArray[6].trim());
    // Corrupt data handling
    if (isNaN(obj.Volume)) {
      return null;
    }
  }

  return JSON.stringify(obj);
}
