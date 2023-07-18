import { queryByTestId, render, screen } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router";
import HoamePage from "../../components/Customer/HoamePage/HoamePage";

describe("HomePage Component", () => {
  render(
    <MemoryRouter>
      <HoamePage />
    </MemoryRouter>
  );

  test("fe_react_customerHome", () => {
    const giftName = screen.queryByTestId("giftName");
    const giftPrice = screen.queryByTestId("giftPrice");

    expect(giftName).toBeTruthy();
    expect(giftPrice).toBeTruthy();
  });
});
