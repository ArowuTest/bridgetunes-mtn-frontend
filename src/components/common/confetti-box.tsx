import React, { useRef, useState, useEffect } from "react";
import ReactConfetti from "react-confetti";

const ConfettiBox = ({
  run = true,
  recycle = false,
  numberOfPieces = 200,
  ...props
}) => {
  const ref = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    const resizeObserver = new ResizeObserver(() => {
      const { offsetWidth, offsetHeight } = element;
      setSize({ width: offsetWidth, height: offsetHeight });
    });

    resizeObserver.observe(element);

    return () => resizeObserver.unobserve(element);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {size.width > 0 && (
        <ReactConfetti
          width={size.width}
          height={size.height}
          numberOfPieces={run ? numberOfPieces : 0}
          recycle={recycle}
          {...props}
          ref={ref}
        />
      )}
    </div>
  );
};

export default ConfettiBox;
