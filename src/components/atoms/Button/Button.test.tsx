import React from "react";
import pretty from "pretty";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Button from "./Button";

let container: any = null;

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

describe("Button Component", () => {
  test("should match snapshot", () => {
    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`""`);
  });
  test("should render button", () => {
    act(() => {
      render(<Button />, container);
    });
    expect(container.querySelector("button")).not.toBeNull();
  });
});
