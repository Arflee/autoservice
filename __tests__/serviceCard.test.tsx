import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ServiceCard from "@/components/serviceCard";

describe("Test card ", () => {
  test("Card has title", () => {
    render(
      <ServiceCard
        service={{ id_sluzba: 1, nazev: "name", cena: 123, popis: "test" }}
      />
    );
    expect(
      screen.getAllByRole("heading", { level: 2 })
    ).toBeDefined();
  });

  test("Card has body", () => {
    expect(
      screen.getByText("test")
    ).toBeDefined();
  });
});
