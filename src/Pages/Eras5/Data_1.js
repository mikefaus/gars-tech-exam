import React, { useState } from "react";
import Card_checkbox from "../../Components/Widjets/Card_checkbox";
import Card_radio from "../../Components/Widjets/Card_radio";
import Card_checkbox_2 from "../../Components/Widjets/Card_checkbox_2";
import Card_radio_3 from "../../Components/Widjets/Card_radio_3";

const Data1 = () => {
  const variable = ["Cloud cover", "Precitipation Flux", "Liquid precipitation duration fraction", "Solid precipitation duration fraction"];
  const statistic = ["24 hour maximum", "24 hour mean", "24 hour minimum", "Day time maximum"];
  const years = Array.from({ length: 47 }, (_, index) => index + 1976);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 30 }, (_, index) => index + 1);
  const time = ["06:00", "09:00", "12:00", "15:00", "18:00"];
  const format = ["Zip file (.zip)", "Compresed tar file (.tar.gz)"];


  const handleSubmission = () => {};

  return (
    <div className="content_wrap">
      <h1 className="content_title">Data 1</h1>

      <Card_radio data = {variable} title = {'Variable'}/>
      <Card_checkbox_2 data = {statistic} title = {'Statistic'}/>
      <Card_checkbox data = {years} title = {'Year'}/>
      <Card_checkbox data = {months} title = {'Month'}/>
      <Card_checkbox data = {days} title = {'Day'}/>
      <Card_radio_3 data = {days} title = {'Graphical Area'}/>
      <Card_radio data = {format} title = {'Format'}/>

      <div className="content_body"></div>

      <div className="content_foot">
        <p className="warning">Please check mandatory fields</p>
        <button className="button_form">Download file</button>
      </div>
    </div>
  );
};

export default Data1;
