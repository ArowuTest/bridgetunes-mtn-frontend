import { CustomTooltip } from "@/src/components/common/tooltip"
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const data = [
  { day: "Mon", points: 1100 },
  { day: "Tue", points: 1500 },
  { day: "Wed", points: 4000 },
  { day: "Thu", points: 3900 },
  { day: "Fri", points: 4200 },
  { day: "Sat", points: 3000 },
  { day: "Sun", points: 2800 },
]

export const YourPointsJourney = () => {
  return (
    <div className="px-4 rounded-lg w-full max-w-full">
      <div className="w-full h-[200px] sm:h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Gradient definition */}
            <defs>
              <linearGradient id="colorPoints" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffd90090" stopOpacity={0.5} />
                <stop offset="95%" stopColor="#ffd90080" stopOpacity={0} />
              </linearGradient>
            </defs>

            <XAxis
              fontSize={"0.5rem"}
              dataKey="day"
              stroke="#606060"
              strokeWidth={"0.1rem"}
              tickLine={false}
              padding={{ left: 10, right: 10 }}
            />
            <YAxis hide />
            <Tooltip content={<CustomTooltip />} />

            <Area
              type="monotone"
              dataKey="points"
              stroke="#FFD700"
              fill="url(#colorPoints)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
