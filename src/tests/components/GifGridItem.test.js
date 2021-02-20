import React, { Component } from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas del componente gifgriditem", () => {
  const title = "Hola mundo";
  const url = "https://google.com";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Se debe mostrar el componente correctamente", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Debe haber un parrofo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("La imagen debe tener como src la url y como alt el title", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("El div debe tener la clase card", () => {
    const div = wrapper.find("div");
    expect(div.prop("className")).toMatch("card");
  });
});
