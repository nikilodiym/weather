// Імпортуємо необхідні бібліотеки для тестування
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Forecast from "./Forecast"; // Перевірте чи шлях вірний

// Описуємо тестовий сценарій для компоненти Forecast
describe("Forecast Component", () => {
  // Перед кожним тестом можна виконати певні налаштування
  beforeEach(() => {
    // Якщо є необхідні setup, додайте тут
  });

  // Тестуємо, чи компонента правильно рендериться
  it("renders Forecast component correctly", () => {
    const { getByText } = render(<Forecast />);

    // Перевірка, чи відображається заголовок
    expect(getByText("Погноз на 5 днів")).toBeInTheDocument();
  });

  // Тестуємо, чи викликається функція при кліку
  it("calls updateWeatherState on forecast item click", () => {
    // Створюємо фіктивні дані для передачі у компоненту, якщо потрібно
    const mockWeatherState = {
      forecast: {
        forecastday: [
          { date: "2022-02-15", day: { condition: { icon: "icon-path" } } },
          // Додайте інші елементи, якщо необхідно
        ],
      },
    };

    // Створюємо мокову функцію для передачі як пропс
    const mockUpdateWeatherState = jest.fn();

    // Рендеримо компонент з фіктивними даними та мокованою функцією
    const { getByAltText } = render(
      <Forecast
        weatherState={mockWeatherState}
        updateWeatherState={mockUpdateWeatherState}
      />
    );

    // Знаходимо елемент прогнозу за його іконкою
    const forecastItem = getByAltText("icon-path").closest("li");

    // Клікаємо на елемент прогнозу
    fireEvent.click(forecastItem);

    // Перевіряємо, чи мокована функція викликається один раз
    expect(mockUpdateWeatherState).toHaveBeenCalledTimes(1);

    // Перевіряємо, чи мокована функція викликається із правильним індексом (або іншими параметрами, які вам потрібні)
    expect(
      mockUpdateWeatherState
    ).toHaveBeenCalledWith(/* передайте очікувані параметри тут */);
  });

  // Додайте інші тести, які вам потрібні для повного покриття функціональності
});
