export const chartPaths = [
  "new-players",
  "total-players",
  "total-in-game-hours-24",
  "total-in-game-hours",
  "taxes-paid-24",
  "total-taxes-paid",
  "dao-revenue-24",
  "total-dao-revenue"
];

export const useChartTitle = (chartPath: string) => {
  switch (chartPath) {
    case "new-players":
      return "New players"
    case "total-players":
      return "Total players"
    case "total-in-game-hours-24":
      return "Daily in-game hours"
    case "total-in-game-hours":
      return "Total in-game hours"
    case "taxes-paid-24":
      return "Daily taxes paid"
    case "total-taxes-paid":
      return "Total taxes paid"
    case "dao-revenue-24":
      return "Daily DAO revenue"
    case "total-dao-revenue":
      return "Total DAO revenue"

    default:
      return ""
  }
} 