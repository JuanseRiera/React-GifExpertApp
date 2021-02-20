import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas para el componente addCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setcategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setcategories={setCategories} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("Deberia cambiar los valores del input", () => {
    const value = "hola mundo";
    const input = wrapper.find("input");

    input.simulate("change", { target: { value } });
    expect(wrapper.find("input").prop("value")).toBe(value.toUpperCase());
  });

  test("No se deberia ejecutar la funcion set categories", () => {
    let form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Deberia llamar al setCategories y limpiar la caja de texto", () => {
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "What up" } });

    wrapper.find("form").simulate("submit", { preventDefault() {} });

    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(input.prop("value")).toBe("");
  });
});
