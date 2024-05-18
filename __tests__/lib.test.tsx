import { describe, expect, it, test, vi } from "vitest";
import { formatDateTime } from "@/app/lib/data";
import { ReservationApiResolver } from "@/app/lib/reservationApiResolver";
import { ServiceApiResolver } from "@/app/lib/serviceApiResolver";
import { getAvailableTimeSlots } from "@/components/calendar";

describe("Testing typescript functions", () => {
  test("Format date time", () => {
    const date = new Date("2019-01-16")
    date.setHours(1)
    expect(formatDateTime(date)).toBe(
      "středa 16. ledna 2019 v 1:00"
    );
  });

  test("Get available time slots in available day", () => {
    expect(
      getAvailableTimeSlots(
        [
          {
            cas: "10:00",
            datum: "2019-01-16",
            id_osoba: 1,
            id_rezervace: 1,
            id_sluzba: 1,
            id_vozidlo: 1,
            id_mechanik: null,
            mechanik_id_osoba: null,
          },
        ],
        new Date("2019-01-16")
      )
    ).toStrictEqual([8, 9, 11, 12]);
  });

  test("Get available time slots in unavailable day", () => {
    expect(
      getAvailableTimeSlots(
        [
          {
            cas: "10:00",
            datum: "2020-02-17",
            id_osoba: 1,
            id_rezervace: 1,
            id_sluzba: 1,
            id_vozidlo: 1,
            id_mechanik: null,
            mechanik_id_osoba: null,
          },
        ],
        new Date("2019-01-16")
      )
    ).toStrictEqual([8, 9, 10, 11, 12]);
  });

  const reservationDaoMock = { GetAllReservations: vi.fn() };
  const reservationResolver = new ReservationApiResolver(
    reservationDaoMock as any
  );

  it("should return reservations", async () => {
    reservationDaoMock.GetAllReservations.mockImplementationOnce(() => {
      return [{ id_rezervace: 1 }];
    });
    const reservations = await reservationResolver.fetchReservations();
    expect(reservationDaoMock.GetAllReservations).toHaveBeenCalledTimes(1);
    expect(reservations).toHaveLength(1);
  });

  const servicecDaoMock = { GetAllServices: vi.fn() };
  const serviceResolver = new ServiceApiResolver(servicecDaoMock as any);

  it("should return services", async () => {
    servicecDaoMock.GetAllServices.mockImplementationOnce(() => {
      return [{ id_sluzba: 1 }];
    });
    const reservations = await serviceResolver.fetchServices();
    expect(servicecDaoMock.GetAllServices).toHaveBeenCalledTimes(1);
    expect(reservations).toHaveLength(1);
  });
});
