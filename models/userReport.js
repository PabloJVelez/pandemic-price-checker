function UserReport(reportData) {
  this.storeName = reportData.storeName;
  this.address = reportData.address;
  this.zipCode = reportData.zipCode;
  this.city = reportData.city;
  this.state = reportData.state;
  this.reportedItem = reportData.item;
}

module.exports = { UserReport };
