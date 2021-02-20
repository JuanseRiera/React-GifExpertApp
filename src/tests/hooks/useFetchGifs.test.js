import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Prubas de useFetchGifs", () => {
  test("Deberia traer un array vacio y loading igual a true", async () => {
    let { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Sherlock")
    );
    const { data, loading } = result.current;

    await waitForNextUpdate({ timeout: 5000 });
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("Deberia traer un array con 10 elementos y loading igual a false", async () => {
    let { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Sherlock")
    );
    await waitForNextUpdate({ timeout: 5000 });
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});
