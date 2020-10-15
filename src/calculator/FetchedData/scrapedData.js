import React, { Component } from "react";

import FetchedData from "./fetchedData";

class ScrapedData extends Component {
  constructor () {
  super() 
  this.state = {bankDom, tipNaKreditXPath, maksimalenIznosXPath, rokNaOtplataXPath, godisnaKamatnaStapkaFiksnaXPath, godisnaKamatnaStapkaVarijabilnaXPath } = props
}

scrapedData = [
  {
  tipNaKredit: bankDom.evaluate(
    tipNaKreditXPath,
    bankDom,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue},
  {maksimalenIznos: bankDom.evaluate(
    maksimalenIznosXPath,
    bankDom,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue},
  {rokNaOtplata: bankDom.evaluate(
    rokNaOtplataXPath,
    bankDom,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue},
  {godisnaKamatnaStapkaFiksna: bankDom.evaluate(
    godisnaKamatnaStapkaFiksnaXPath,
    bankDom,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue},
  {godisnaKamatnaStapkaVarijabilna: bankDom.evaluate(
    godisnaKamatnaStapkaVarijabilnaXPath,
    bankDom,
    null,
    XPathResult.STRING_TYPE,
    null
  ).stringValue},
  ]



render () {
  return (
  <div>
    
  </div>
  )
}  
}

export default ScrapedData;