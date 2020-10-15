import React from "react";
import axios from "axios"
import ScrapedData from "./scrapedData"

const FetchedData = () => {
  const corsProxy = "https://cors-anywhere.herokuapp.com/";
  const euriborURL =
  "https://www.euribor-rates.eu/en/current-euribor-rates/3/euribor-rate-6-months/";
const requestURLEuribor = corsProxy + euriborURL;

const stbPotrosuvacki =
  "https://www.stb.com.mk/naselenie/krediti/potroshuvacki-kredit/do-1-500-000-denari-25-000-evra/";
const stbStanben =
  "https://www.stb.com.mk/naselenie/krediti/stanbeni-krediti/glavni-karakteristiki/#Cenovni_uslovi";
const stbHipotekaren =
  "https://www.stb.com.mk/naselenie/krediti/potroshuvacki-kredit/potroshuvacki-obezbeden-kredit/";
const nlbPotrosuvacki =
  "https://nlb.mk/%D0%A4%D0%B8%D0%B7%D0%B8%D1%87%D0%BA%D0%B8_%D0%BB%D0%B8%D1%86%D0%B0/%D0%9F%D0%BE%D0%BD%D1%83%D0%B4%D0%B0/%D0%9A%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8/%D0%9D%D0%9B%D0%91_%D0%BF%D0%BE%D1%82%D1%80%D0%BE%D1%88%D1%83%D0%B2%D0%B0%D1%87%D0%BA%D0%B8_%D0%B3%D0%BE%D1%82%D0%BE%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B8_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8.aspx";
const nlbStanben =
  "https://nlb.mk/%D0%A4%D0%B8%D0%B7%D0%B8%D1%87%D0%BA%D0%B8_%D0%BB%D0%B8%D1%86%D0%B0/%D0%9F%D0%BE%D0%BD%D1%83%D0%B4%D0%B0/%D0%9A%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8/%D0%A0%D0%B8%D0%B7%D0%B8%D0%BA%D0%BE_%D1%81%D1%82%D0%B0%D0%BD%D0%B1%D0%B5%D0%BD%D0%B8_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8.aspx";
const nlbHipotekaren =
  "https://nlb.mk/%D0%A4%D0%B8%D0%B7%D0%B8%D1%87%D0%BA%D0%B8_%D0%BB%D0%B8%D1%86%D0%B0/%D0%9F%D0%BE%D0%BD%D1%83%D0%B4%D0%B0/%D0%9A%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8/%D0%A5%D0%B8%D0%BF%D0%BE%D1%82%D0%B5%D0%BA%D0%B0%D1%80%D0%BD%D0%B8_%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B8.aspx";
const requestURLSTBPotrosuvacki = corsProxy + stbPotrosuvacki;
const requestURLSTBStanben = corsProxy + stbStanben;
const requestURLSTBHipotekaren = corsProxy + stbHipotekaren;
const requestURLnlbPotrosuvacki = corsProxy + nlbPotrosuvacki;
const requestURLnlbStanben = corsProxy + nlbStanben;
const requestURLnlbHipotekaren = corsProxy + nlbHipotekaren;


return (
// Make a request for a user with a given ID
fetch(requestURLSTBPotrosuvacki)
  .then( (response) => {
    const domParser = new DOMParser();
      const bankDom = domParser.parseFromString(response, "text/html");

      const data = new ScrapedData(
        bankDom,
        "/html/body/div/div[1]/div/div[4]/div/div/h3",
        "/html/body/div/div[1]/div/div[4]/div/div/h4",
        "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[1]/ul[5]/li[2]/text()",
        "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[2]/ul[2]/li[1]/text()",
        "/html/body/div/div[1]/div/div[5]/div/div[1]/div[1]/div[2]/ul[3]/li[1]/text()[1]"
      );
    console.log(response);
    console.log(data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  })
  )
  }

export default FetchedData;

