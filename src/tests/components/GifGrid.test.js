import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("Pruabs del componente gifgrid", () => {
  test("Debería de cargar el componente", () => {
    let mockData = { data: [], loading: true };
    useFetchGifs.mockReturnValue(mockData);
    const wrapper = shallow(<GifGrid category={"Sherlock"} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debería de cargar el componente", () => {
    let mockData = {
      data: [
        {
          id: "1",
          url: "https://google.com",
          title: "Hola mundo",
        },
      ],
      loading: false,
    };
    useFetchGifs.mockReturnValue(mockData);
    const wrapper = shallow(<GifGrid category={"Sherlock"} />);
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(mockData.data.length);
  });
});
