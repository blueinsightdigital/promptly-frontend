/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from "@testing-library/react";
import ListGroup from "../components/ListGroup";

describe("ListGroup", () => {
  const items = ["Item 1", "Item 2", "Item 3"];
  const heading = "Test Heading";
  const onSelectItem = jest.fn();

  it("renders the heading and items correctly", () => {
    const { getByText, getAllByRole } = render(
      <ListGroup items={items} heading={heading} onSelectItem={onSelectItem} />
    );

    expect(getByText(heading)).toBeInTheDocument;
    expect(getAllByRole("listitem")).toHaveLength(items.length);
    items.forEach((item) => expect(getByText(item)).toBeInTheDocument);
  });

  it("calls onSelectItem with the correct item when an item is clicked", () => {
    const { getByText } = render(
      <ListGroup items={items} heading={heading} onSelectItem={onSelectItem} />
    );

    fireEvent.click(getByText(items[1]));
    expect(onSelectItem).toHaveBeenCalledWith(items[1]);
  });
});