import { Badge } from "@/components/ui/badge";
import { Blocks, Check, List } from "lucide-react";

type FilterProps = {
  currentFilter: "all" | "pending" | "completed";
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
};

export default function Filter({ currentFilter, setCurrentFilter }: FilterProps) {
  return (
    <div className="flex gap-2">
      <Badge
        className="cursor-pointer"
        variant={currentFilter === "all" ? "default" : "outline"}
        onClick={() => setCurrentFilter("all")}
      >
        <List size={14} />
        Todas
      </Badge>
      <Badge
        className="cursor-pointer"
        variant={currentFilter === "pending" ? "default" : "outline"}
        onClick={() => setCurrentFilter("pending")}
      >
        <Blocks size={14} />
        Não Finalizadas
      </Badge>
      <Badge
        className="cursor-pointer"
        variant={currentFilter === "completed" ? "default" : "outline"}
        onClick={() => setCurrentFilter("completed")}
      >
        <Check size={14} />
        Concluidas
      </Badge>
    </div>
  );
}