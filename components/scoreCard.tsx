import { getCurrency } from "@/lib/constant";
import { growthFormatter } from "@/lib/formater";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ScoreCardProps {
  label: string;
  total?: number;
  growth?: number;
  isCurency?: boolean;
  bestProduct?: string;
}

const ScoreCard = ({
  label,
  total,
  growth,
  isCurency,
  bestProduct,
}: ScoreCardProps) => {
  return (
    <div className=" bg-white rounded-md px-4 py-2 sm:p-4 w-full flex flex-shrink flex-col">
      <p className="text-start md:text-center text-xs sm:text-sm text-muted-foreground pb-2">
        {label}
      </p>
      {bestProduct ? (
        <p className="text-xl sm:text-2xl text-center font-bold text-primary">
          {bestProduct}
        </p>
      ) : (
        <div className="flex gap-x-2 items-center justify-start sm:justify-around ">
          <p className="text-regular text-primary sm:text-2xl font-bold ">
            {isCurency ? getCurrency(total!) : total}
          </p>
          {growth! > 0 ? (
            <TrendingUp
              className={`w-4 h-4 sm:w-10 sm:h-10 md:h-8 text-bold text-emerald-700`}
            />
          ) : (
            <TrendingDown
              className={`w-4 h-4 sm:w-10 md:h-10 text-bold text-danger`}
            />
          )}

          <p
            className={`text-regular sm:text-xl font-bold  ${
              growth! < 0 ? "text-danger" : "text-emerald-700"
            }`}
          >
            {growthFormatter(growth!)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ScoreCard;
