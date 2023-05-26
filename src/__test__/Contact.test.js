import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Contact from "../components/Contact";

test("should show a contact form", () => {
  render(<Contact />);

  // Select form elements
  const firstNameInput = screen.getByLabelText("First name", {
    selector: "input",
  });
  const lastNameInput = screen.getByLabelText("Last name");
  const emailInput = screen.getByLabelText("Email", { selector: "input" });
  const textInput = screen.getByLabelText("Message", { selector: "textarea" });
  const checkbox = screen.getByRole("checkbox");
  const submitButton = screen.getByRole("button", {
    name: /Send message/i,
  });

  // Simulate user interactions
  userEvent.click(checkbox);
  userEvent.type(firstNameInput, "Alvin");
  userEvent.type(lastNameInput, "Wanjala");
  userEvent.type(emailInput, "example@example.com");
  userEvent.type(textInput, "Hello, this is my message.");
  userEvent.click(submitButton);

  // check if relevant input elements and submit button exist
  expect(firstNameInput).toBeInTheDocument();
  expect(lastNameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(textInput).toBeInTheDocument();

  // Assert form behavior
  // Assert that the checkbox is checked
  expect(checkbox).toBeChecked();

  // Assert the input values
  expect(firstNameInput).toHaveValue("Alvin");
  expect(lastNameInput).toHaveValue("Wanjala");
  expect(emailInput).toHaveValue("example@example.com");
  expect(textInput).toHaveValue("Hello, this is my message.");
});
