import React from "react";
import pretty from "pretty";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TagItem from "./TagItem";
import Tag from "../../../interfaces/tag";

let container: any = null;

const tag: Tag = {
  name: 'name',
  url: 'url',
}

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

describe("TagItem Component", () => {
  test("should match snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
  test("should render tag name", () => {
    act(() => {
      render(<TagItem tag={tag} />, container);
    });
    expect(container.querySelector("span").textContent).toBe('name');
  });
});
