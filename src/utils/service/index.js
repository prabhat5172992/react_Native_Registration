import axios from "axios";

// function formatData() {
//   let newData = [];
//   fetch("https://restcountries.eu/rest/v2/all")
//     .then(response => response.json())
//     .then(
//       result =>
//         result &&
//         result.forEach(item =>
//           newData.push({
//             name: item.name ? item.name : "Default",
//             flag: item.flag
//               ? item.flag
//               : "https://restcountries.eu/data/ind.svg",
//             timeZone:
//               item.timezones && item.timezones[0]
//                 ? item.timezones[0]
//                 : "UTC+05:30",
//             capital: item.capital ? item.capital : "Default",
//             region: item.region ? item.region : "Default",
//             subregion: item.subregion ? item.subregion : "Default"
//           })
//         )
//     )
//     .catch(error => console.log("An Error Occured!=====", error));
//   return newData;
// }
/* Above method is commented because it is giving empty array as the data was too big and data comes asynchoronous not able to read a big bunch of data*/

async function formatData() {
  try {
    const response = await axios.get("https://restcountries.eu/rest/v2/all");
    return response.data.map((item, i) => {
      return {
        name: item.name ? item.name : "Default",
        flag: item.flag ? item.flag : "https://restcountries.eu/data/ind.svg",
        timeZone:
          item.timezones && item.timezones[0] ? item.timezones[0] : "UTC+05:30",
        capital: item.capital ? item.capital : "Default",
        region: item.region ? item.region : "Default",
        subregion: item.subregion ? item.subregion : "Default",
        key: `${i + 1}`
      };
    });
  } catch (err) {
    throw new Error("Unable to get the Data:", err);
  }
}

export { formatData };
