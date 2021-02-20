import React, { Component } from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../GifExpertApp";

describe("Pruebas de la aplicacion gif expert app", () => {
  test("Se debe mostrar el componente correctamente", () => {
    const categories = ["Sherlock"];
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
