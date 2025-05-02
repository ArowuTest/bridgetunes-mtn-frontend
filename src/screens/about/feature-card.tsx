import { TbSettingsFilled } from "react-icons/tb"

type FeatureCardProps = {
  title: string
  description: string
}

export const FeatureCard = ({ title, description }: FeatureCardProps) => (
  <div className="flex flex-col md:flex-row items-center gap-8 bg-[#0056B3] p-4 md:p-8 rounded-xl md:rounded-3xl shadow-lg max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-[80%] mx-auto">
    <div>
      <TbSettingsFilled className="text-6xl" />
    </div>

    <div className="px-2 text-center md:text-left">
      <h3 className="w-fit mx-auto md:mx-0 bg-yellow-400 text-black mb-4 rounded-md px-1 text:base md:text-lg">
        {title}
      </h3>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  </div>
)
