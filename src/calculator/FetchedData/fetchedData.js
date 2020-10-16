import React from "react";

import StopanskaBanka from "../../parsedData.json"

const FetchedData = () => {
  fetch(StopanskaBanka)
  .then( (response) => {
    console.log(response)
    console.log(StopanskaBanka["StopanskaBanka"][0])
    
  });
  // eslint-disable-next-line no-unused-vars
  const a = StopanskaBanka["StopanskaBanka"][0]["Kamatna stapka"];
  
  return (
  <div>
    
  </div>)
}
  

export default FetchedData;

// const domParser = new DOMParser();
//       const bankDom = domParser.parseFromString(response, "text/html");

//       const data = new ScrapedData(
//         bankDom,
//         "/html/body/div/div[1]/div/div[4]/div/div/h3",
//         "/html/body/div/div[1]/div/div[4]/div/div/h4",
//         "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[1]/ul[5]/li[2]/text()",
//         "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[2]/ul[2]/li[1]/text()",
//         "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[2]/ul[3]/li[1]/text()[1]"
//       );