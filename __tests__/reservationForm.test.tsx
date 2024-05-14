import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import ReservationForm from "@/components/reservationForm";
import { MemoryRouter } from "react-router-dom";
import RootLayout from "@/app/layout";

vi.mock("next/navigation", () => ({
    useRouter() {
      return {
        prefetch: () => null
      };
    }
}));

test("Form has all input fields", () => {
  render(
    <ReservationForm
    selectedDate={new Date("2019-12-12")}
    selectedTimeSlot={10}
    />
  );

  expect(screen.getByPlaceholderText("Jméno")).toBeDefined();
  expect(screen.getByPlaceholderText("Příjmení")).toBeDefined();
  expect(screen.getByPlaceholderText("E-mail")).toBeDefined();
  expect(screen.getByPlaceholderText("Tel. č.")).toBeDefined();
  expect(screen.getByPlaceholderText("Model vozidla")).toBeDefined();
  expect(screen.getByPlaceholderText("SPZ")).toBeDefined();
  expect(screen.getByPlaceholderText("Služba")).toBeDefined();
});