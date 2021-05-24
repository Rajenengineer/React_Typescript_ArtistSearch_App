import React from "react";
import pretty from "pretty";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Album from "../../../interfaces/album";

import AlbumItem from "./AlbumItem";

let container: any = null;

const mockAlbum = {
  name: "Album Name",
  playcount: 1234,
  mbid: "mbid",
  url: "url",
  image: [
    {
      "#text": "http://localhost/album_image_url",
      size: "extralarge",
    },
  ],
};

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("AlbumItem Component", () => {
  test("should match snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
  test("should render album image", () => {
    act(() => {
      render(<AlbumItem album={mockAlbum} />, container);
    });
    expect(container.querySelector("img").src).toBe(
      "http://localhost/album_image_url"
    );
  });
  test("should render album name", () => {
    act(() => {
      render(<AlbumItem album={mockAlbum} />, container);
    });
    expect(container.querySelector("span").textContent).toBe("Album Name");
  });
});
