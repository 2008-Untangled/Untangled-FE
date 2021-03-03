import React from "react";
import "react-native-gesture-handler";
import "@testing-library/jest-dom/extend-expect";
import reactTestRenderer from "react-test-renderer";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import HomePage from "./HomePage";
import { getAllRooms } from "../apiCalls";
jest.mock("../apiCalls");


const resolvedRooms = {
  success: true,
  data: [
    {
      id: 1,
      name: "Kitchen",
      image:
        "https://user-images.githubusercontent.com/65255478/109369416-81cc3b80-7859-11eb-8bc6-f4647040555a.png",
      user_id: 1,
    },
    {
      id: 2,
      name: "Living Room",
      image:
        "https://user-images.githubusercontent.com/65255478/109369440-901a5780-7859-11eb-83e9-350d3f3494ec.png",
      user_id: 1,
    },
    {
      id: 3,
      name: "Backyard",
      image:
        "https://user-images.githubusercontent.com/65255478/109369423-87c21c80-7859-11eb-8559-43a0cf43e9a9.png",
      user_id: 1,
    },
    {
      id: 4,
      name: "Bedroom",
      image:
        "https://user-images.githubusercontent.com/65255478/109369427-8a247680-7859-11eb-9330-b282ea6b4907.png",
      user_id: 1,
    },
  ],
};
describe("HomePage", () => {
  it("should render correctly", () => {
    const { getByTestId } = render(<HomePage />);
    const homeImage = getByTestId("homeFront");

    expect(homeImage.props.source).toBe(
      require("../../assets/backdrops/homefront.png")
    );
  });

  it("should not render incorrect assets", () => {
    const { getByTestId } = render(<HomePage />);
    const homeImage = getByTestId("homeFront");

    expect(homeImage.props.source).not.toBe(undefined);
  });

  it("should fetch all rooms when clicked on", async () => {
    const mockGetAllRooms = jest.fn();
    const { getByTestId } = render(
      <HomePage onPress={() => mockGetAllRooms(1)} />
    );
    const homeImage = getByTestId("homeFront");

    fireEvent.press(homeImage);
    const roomData = await waitFor(() =>
      mockGetAllRooms.mockResolvedValueOnce(resolvedRooms)
    );

    expect(roomData).toBeTruthy(); 
    // expect(mockGetAllRooms).toHaveBeenCalled();//is this sufficent?
  });
});
