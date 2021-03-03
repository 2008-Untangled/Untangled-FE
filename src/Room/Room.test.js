import React from "react";
import "react-native-gesture-handler";
import "@testing-library/jest-dom/extend-expect";
import {create, act} from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react-native";
import App from "../App/App";
import Room from "./Room";
import { BaseRouter } from "@react-navigation/native";

const memories = [
  {
    id: 1,
    image:
      "https://itdoesnttastelikechicken.com/wp-content/uploads/2017/05/super-moist-vegan-banana-nut-muffins-easy-dairy-free-facebook.jpg'",
    song:
      "https://open.spotify.com/album/3mGmn1JDde3XyKQqZTJUAL?highlight=spotify:track:4QxDOjgpYtQDxxbWPuEJOy",
    description: "Your mothers secret recipe for those banana nut muffins",
    aromas: "Crisp winter air, hot cocoa, fresh baked banana bread",
    x: 500,
    y: 550,
    room_id: 1,
  },
  {
    id: 3,
    image:
      "https://cdn.images.express.co.uk/img/dynamic/41/590x/monopoly-gamer-board-games-reboot-super-mario-nintendo-823505.jpg",
    song:
      "https://open.spotify.com/album/6mmv0gwumlFGWDGJXF4yEv?highlight=spotify:track:29U7stRjqHU6rMiS8BfaI9",
    description: "Playing monopoly and drinking lemonade",
    aromas: "Lemons, fresh cut roses",
    x: 677,
    y: 785,
    room_id: 1,
  },
];

describe("Room", () => {
  it("should create memories", () => {
    //   let props = {route}
    // const { getByTestId } = render(<Room />);
    let root;
    act(() => {
    root = create(<Room props={{route:{params:{id: 2}}}}/>)
    });
    // const createMemories = jest.fn();

    // const { getByTestId } = render(<Room />);
    // createMemories.mockResolvedValue()
    // createMemories(memories);
    // const memory1 = getByTestId(1);

    expect(root.toJSON()).toMatchSnapshot();
  });
});
