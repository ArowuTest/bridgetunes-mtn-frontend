import classNames from "classnames"

export type PatternBGProp = {
  children: React.ReactNode
  className?: string
}

export const PatternBG = ({ children, className }: PatternBGProp) => {
  return (
    <div
      className={classNames(
        "w-full text-center bg-[url('/images/pattern-bg.png')] bg-no-repeat bg-cover bg-center bg-black/80",
        className
      )}
    >
      {children}
    </div>
  )
}
