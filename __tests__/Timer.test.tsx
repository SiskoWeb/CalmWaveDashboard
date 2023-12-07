import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Timer from "../src/app/dashboard/features/timer/Timer";

describe("testing timer ", () => {
  it("incress count", async () => {
    render(<Timer />);
    const myElm = screen.getByRole("button", { name: "0" });
    await userEvent.dblClick(myElm);
    const tex = await screen.findByText("2");
    expect(tex).toBeInTheDocument(); //ASSERT
  });
  it("should render user with car", async () => {
    render(<Timer />);

    const myElm = screen.getByRole("button", { name: "0" });
    await userEvent.dblClick(myElm);
    await waitFor(async () => {
      const tex = await screen.findByText("2");
      expect(tex).toBeInTheDocument(); //ASSERT
    });
  });
});
