const factorial = require('../src/factorial'); // Импорт функции для тестирования

test('Факториал 5 должен быть 120', () => {
  expect(factorial(5)).toBe(120);
});

test('Факториал 0 должен быть 1', () => {
  expect(factorial(0)).toBe(1);
});

test('Факториал отрицательного числа должен быть null', () => {
  expect(factorial(-1)).toBeNull();
});

test('Факториал строки должен быть null', () => {
  expect(factorial('abc')).toBeNull();
});
