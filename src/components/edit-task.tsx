import { SquarePen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Tasks } from "@/generated/prisma";
import { useState } from "react";
import { toast } from "sonner";

import { editTask } from "@/_actions/edit-task";

type TaskProps = {
  task: Tasks;
  handleGetTasks: () => void;
};

const EditTask = ({ task, handleGetTasks }: TaskProps) => {
  const [editedTask, setEditedTask] = useState(task.task);

  const handleEditTask = async () => {
    try {
      if (editedTask !== task.task) {
        toast.success("Informação Alterada com Sucesso!! ");
      } else {
        toast.error("As informações não foram alteradas!");
        return;
      }

      await editTask({
        idTask: task.id,
        NewTask: editedTask,
      });

      handleGetTasks();
    } catch (error) {
      throw error;
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <SquarePen size={16} className="cursor-pointer" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editar tarefa</DialogTitle>
        </DialogHeader>

        <div className="flex gap-2">
          <Input
            placeholder="Editar tarefa"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
          />

          <DialogClose>
            <Button className="cursor-pointer" onClick={handleEditTask}>
              Editar
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditTask;
