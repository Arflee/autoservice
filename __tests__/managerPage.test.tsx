import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import ManagerPage from "@/components/managerPage";

test("Admin panel has 4 reservations", () => {
  render(
    <ManagerPage
      reservations={[
        { givenname: "test" },
        { givenname: "test" },
        { givenname: "test" },
        { givenname: "test" },
      ]}
      services={[{ cena: 100, id_sluzba: 1, nazev: "asd", popis: "popis" }]}
    />
  );
  expect(screen.getAllByText("test")).toHaveLength(4);
});
