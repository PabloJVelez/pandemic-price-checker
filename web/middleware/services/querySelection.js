function FilterQuerySelection(category) {
  let query = null;
  switch (category) {
    case "storename":
      query = 'SELECT * FROM "ReportedStores" WHERE storename = $1';
      break;
    case "city":
      query = 'SELECT * FROM "ReportedStores" WHERE city = $1';
      break;
    case "storestate":
      query = 'SELECT * FROM "ReportedStores" WHERE storestate = $1';
      break;
    case "zipcode":
      query = 'SELECT * FROM "ReportedStores" WHERE zipcode = $1';
      break;
    default:
      throw err;
  }

  return query;
}

module.exports = { FilterQuerySelection };
