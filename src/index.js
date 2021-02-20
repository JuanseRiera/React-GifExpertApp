import React from "react";
import ReactDOM from "react-dom";
import GifExpertApp from "./GifExpertApp";
import "./index.css";
const body = document.querySelector("#root");

const defaultCategories = ["Sherlock"];
ReactDOM.render(<GifExpertApp defaultCategories={defaultCategories} />, body);
