import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Plus, List, Check, Blocks } from "lucide-react";

export default function Home() {
  return (
    <main className="w-full bg-gray-100 h-screen flex justify-center items-center">
      <Card className="w-lg p-4">
        <div className="flex gap-2">
          <Input placeholder="Adicionar Tarefa..." />
          <Button className="cursor-pointer" variant="outline">
            <Plus />
            Cadastrar
          </Button>
        </div>
        <Separator />

        <div className="flex gap-2">
          <Badge className="cursor-pointer">
            <List />
            Todas
          </Badge>
          <Badge className="cursor-pointer">
            <Blocks />
            Não Finalizadas
          </Badge>
          <Badge className="cursor-pointer">
            <Check />
            Concluidas
          </Badge>
        </div>
      </Card>
    </main>
  );
}
