import AppHeader from "./app-header";
import { render, screen, cleanup } from "@testing-library/react";
import * as hooks from "../../hooks/useUser";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { MemoryRouter } from "react-router-dom";

beforeEach(() => {
  jest.spyOn(hooks, "useUser").mockImplementation(() => ({
    user: null,
  }));
});

afterEach(() => {
  jest.restoreAllMocks();

  cleanup()
});

describe("AppHeader", () => {
  it("should be render AppHeader component without user", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <AppHeader />
        </Provider>
      </MemoryRouter>
    );

    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
    expect(header).toMatchSnapshot();
  });
});
