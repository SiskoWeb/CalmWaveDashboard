import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Timer from "../src/app/dashboard/features/timer/Timer";

it("should have e text", async () => {
  render(<Timer />);
  const myElm = await screen.findByTestId("btno");
  await userEvent.click(myElm);
  const tex = await screen.findByText("hello");
  expect(tex).toBeInTheDocument(); //ASSERT
});
