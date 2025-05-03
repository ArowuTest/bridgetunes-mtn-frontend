import { DrawCalendarModule } from "./draw-calendar-module"
import { HearFromOurWinners } from "./hear-from-our-winners"
import { HowWinnersAreSelected } from "./how-winners-are-selected"

export const DrawCalendarScreen = () => {
  return (
    <div>
      <DrawCalendarModule />
      <HearFromOurWinners />
      <HowWinnersAreSelected />
    </div>
  )
}
