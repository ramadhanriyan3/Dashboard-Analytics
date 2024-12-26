import { getCurrency } from "@/lib/constant";
import { growthFormatter } from "@/lib/formater";
import { TrendingUp, TrendingDown } from "lucide-react";

interface ScoreCardProps {
  label: string;
  total: number;
  growth: number;
  isCurency?: boolean;
}

const ScoreCard = ({ label, total, growth, isCurency }: ScoreCardProps) => {
  return (
    <div className=" bg-white rounded-md p-2 sm:p-4 w-full ">
      <p className="text-center sm:text-start text-xs sm:text-sm text-muted-foreground pb-2">
        {label}
      </p>
      <div className="flex gap-x-2 items-center justify-around sm:justify-between ">
        <p className="text-sm text-primary sm:text-2xl font-bold">
          {isCurency ? getCurrency(total) : total}
        </p>
        {growth > 0 ? (
          <TrendingUp
            className={`w-4 h-4 md:w-8 md:h-8 text-bold text-emerald-700`}
          />
        ) : (
          <TrendingDown
            className={`w-4 h-4 md:w-8 md:h-8 text-bold text-danger`}
          />
        )}

        <p
          className={`text-sm sm:text-2xl font-bold  ${
            growth < 0 ? "text-danger" : "text-emerald-700"
          }`}
        >
          {growthFormatter(growth)}
        </p>
      </div>
    </div>
  );
};

export default ScoreCard;
