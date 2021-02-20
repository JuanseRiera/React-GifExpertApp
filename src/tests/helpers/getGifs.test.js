import { getGifs } from "../../helpers/getGifs";

describe("Pruebas del helper getGifs", () => {
  test("Deberia traer 10 elementos", async () => {
    const gifs = await getGifs("Sherlock");
    expect(gifs.length).toBe(10);
  });

  test("Deberia traer un array vacio si no se le envia nada", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
