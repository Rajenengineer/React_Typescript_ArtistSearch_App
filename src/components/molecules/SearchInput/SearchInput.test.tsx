import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import SearchInput from "./SearchInput";

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

describe('SearchInput Component', () => {

  it("renders text input without query", () => {
    act(() => {
      render(<SearchInput />, container);
    });
    expect(container.querySelector('input').value).toBe('');
  });

  it("renders text input with query", () => {
    act(() => {
      render(<SearchInput query="some query" />, container);
    });
    expect(container.querySelector('input').value).toBe('some query');
  });

  it("renders search button with given text", () => {
    act(() => {
      render(<SearchInput button="Submit" />, container);
    });
    expect(container.querySelector('button').textContent).toBe('Submit');
  });

  it("calls the onSearch method on button click", () => {
    const onSearch = jest.fn();
    act(() => {
      render(<SearchInput query="some query" onSearch={onSearch} />, container);
    });
    container.querySelector('button').click();
    expect(onSearch).toBeCalled();
    expect(onSearch).toBeCalledWith('some query');
  });

});
