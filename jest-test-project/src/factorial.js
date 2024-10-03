function factorial(n) {
  if (n < 0 || typeof n !== 'number') return null; // Проверка на валидные значения
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

module.exports = factorial; // Экспорт функции для тестирования
