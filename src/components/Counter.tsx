import { useCallback, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((count) => count + 1), []);

  return (
    <button
      type="button"
      className="flex cursor-pointer items-center rounded-[10px] bg-[linear-gradient(83.21deg,#3245ff_0%,#bc52ee_100%)] px-3 py-[10px] text-white no-underline shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12),inset_0_-2px_0_rgba(0,0,0,0.24)] transition-all hover:text-[#e6e6e6] hover:shadow-none md:px-[18px] md:py-[14px]"
      onClick={increment}
    >
      Count: {count}
    </button>
  );
};
