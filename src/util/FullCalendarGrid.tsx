export function getFullCalendarGrid(year: number, month: number): Date[][] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();

  const firstDayOfWeek = firstDayOfMonth.getDay(); // 0 (Sun) - 6 (Sat)
  const totalCells = Math.ceil((firstDayOfWeek + daysInMonth) / 7) * 7;

  const grid: Date[][] = [];
  const days: Date[] = [];

  // Start from the Sunday before the first day of the month
  const startDate = new Date(year, month, 1 - firstDayOfWeek);

  for (let i = 0; i < totalCells; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }

  // Split into weeks
  for (let i = 0; i < days.length; i += 7) {
    grid.push(days.slice(i, i + 7));
  }

  return grid;
}
