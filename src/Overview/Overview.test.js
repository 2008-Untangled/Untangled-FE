import React from "react";
import "react-native-gesture-handler";
import "@testing-library/jest-dom/extend-expect";
import reactTestRenderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App/App";
import HomePage from "../HomePage/HomePage";
import Overview from "./Overview";

describe("Overview", () => {
  it.skip("should render correctly", () => {
    const getByTestIdHome = render(<HomePage />).getByTestId;
    const { getByTestId } = render(
      <Overview
        testId="dollhouse"
        route={"Overview", {
          rooms: [
            { id: 1, name: "pantry" },
            { id: 2, name: "front hallway" },
          ],
        }}
        // params={{
        //   rooms: [
        //     { id: 1, name: "pantry" },
        //     { id: 2, name: "front hallway" },
        //   ],
        // }}
      />
    );
    const homeImage = getByTestIdHome("homeFront");
    fireEvent.press(homeImage);
    const overviewImage = getByTestId("dollhouse");
    expect(overviewImage.props.rooms).toBe(Array);
  });
  //   it("should not render incorrect assets", () => {
  //     const { getByTestId } = render(<HomePage />);
  //     const homeImage = getByTestId("homeFront");
  //     expect(homeImage.props.source).not.toBe(undefined);
  //   });
});
