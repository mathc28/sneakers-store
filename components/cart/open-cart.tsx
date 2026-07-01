import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export default function OpenCart({
  className,
  quantity,
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center text-ink transition-colors hover:text-brand">
      <ShoppingCartIcon
        className={clsx("h-5 transition-all ease-in-out", className)}
      />
      {quantity ? (
        <div className="absolute right-0 top-0 -mr-1 -mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-ink">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}