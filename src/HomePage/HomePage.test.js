import React from "react";
import "@testing-library/jest-dom/extend-expect";
import reactTestRenderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import HomePage from "./HomePage";

describe("HomePage", () => {
  it("should render correctly", () => {
    // reactTestRenderer.create(<HomePage />);
    const { getByTestId } = render(<HomePage />);
    const homeImage = getByTestId("homeFront");
    expect(homeImage.props.source).toBe(
      require("../../assets/backdrops/homefront.png")
    );
  });
});
