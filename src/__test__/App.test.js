import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

test("has at least one heading element", () => {
  render(<App />);
  const headingElement = screen.getAllByRole("heading");
  expect(headingElement).not.toBeNull();
});

// Test for links, urls and ids
test("should contain a link with url: https://training.zuri.team/", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Zuri Team",
    href: "https://training.zuri.team/",
    id: "btn__zuri",
  });

  expect(linkElement).toBeInTheDocument();
});

test("should contain a link with url: http://books.zuri.team", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Zuri Books",
    href: "http://books.zuri.team",
    id: "books",
  });

  expect(linkElement).toBeInTheDocument();
});

test("should contain a link with url: http://books.zuri.team/python-for-beginners?ref_id=refname", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Python Books",
    href: "http://books.zuri.team/python-for-beginners?ref_id=/[a-zA-Z]/",
    id: "book__python",
  });

  expect(linkElement).toBeInTheDocument();
});

test("should contain a link with url: https://background.zuri.team", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Background Check for Coders",
    href: "https://background.zuri.team",
    id: "pitch",
  });

  expect(linkElement).toBeInTheDocument();
});

test("should contain a link with url: https://books.zuri.team/design-rules", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Design Books",
    href: "https://books.zuri.team/design-rules",
    id: "book__design",
  });

  expect(linkElement).toBeInTheDocument();
});

test("should contain a link to /contact page with id=contact", () => {
  render(<App />);

  const linkElement = screen.getByRole("link", {
    name: "Contact Me",
    href: "/contact",
    id: "contact",
  });

  expect(linkElement).toBeInTheDocument();
});
