var appData = {};

function storeData(data) {
  appData = data;
}

function getData() {
  return appData;
}

export { storeData, getData };
