import React from "react";
import pretty from "pretty";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TrackItem from "./TrackItem";
import Track from "../../../interfaces/track";

let container: any = null;

const track: Track = {
  name: 'track name',
  playcount: 123,
  mbid: 'mbid',
  url: 'url',
  image: []
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

describe("TrackItem Component", () => {
  test("should match snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
  test("should render track with name", () => {
    act(() => {
      render(<TrackItem track={track} />, container);
    });
    expect(container.querySelector("div").textContent).toBe('track name');
  });
});
