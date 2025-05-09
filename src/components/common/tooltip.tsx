export const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-black text-xs rounded-lg px-3 py-1 shadow">
        <p className="font-bold">{payload[0].value.toLocaleString()}</p>
        <p className="text-gray-600">point</p>
      </div>
    )
  }

  return null
}
