"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Plus,
  List,
  Check,
  Blocks,
  Trash,
  ListCheck,
  Sigma,
} from "lucide-react";

import { EditTask } from "../components/edit-task";

import { getTasks } from "@/_actions/get-tasks-from-db";
import { useEffect, useState } from "react";

import { Tasks } from "@/generated/prisma/client";
import { NewTask } from "@/_actions/add-task";
import { deleteTask } from "@/_actions/delete-task";

import { toast } from "sonner";

export default function Home() {
  const [taskList, setTaskList] = useState<Tasks[]>([]);
  const [task, setTask] = useState<string>("");

  const handleGetTasks = async () => {
    try {
      const tasks = await getTasks();

      if (!tasks) return;

      setTaskList(tasks);
    } catch (error) {
      throw error;
    }
  };

  const handleAdTask = async () => {
    try {
      if (task.length === 0 || !task) {
        toast.error("Por favor, insira uma tarefa válida!");
        return;
      }

      const myNewTask = await NewTask(task);
      toast.success("Tarefa adicionada com sucesso!");
      if (!myNewTask) return;
      
      await handleGetTasks();
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteTask = async (id: string) => {
    try {
      if (!id) return;

      const deletedTask = await deleteTask(id);

      if (!deleteTask) return;

      console.log(deleteTask);
      await handleGetTasks();
      toast.warning("Tarefa deletada com sucesso!");
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    handleGetTasks();
  }, []);

  return (
    <main className="w-full bg-gray-100 h-screen flex justify-center items-center">
      <Card className="w-lg ">
        <CardHeader className="flex gap-2">
          <Input
            placeholder="Adicionar Tarefa..."
            onChange={(e) => setTask(e.target.value)}
          />
          <Button className="cursor-pointer" onClick={handleAdTask}>
            <Plus />
            Cadastrar
          </Button>
        </CardHeader>

        <CardContent>
          <Separator className="mb-4" />

          <div className="flex gap-2">
            <Badge className="cursor-pointer" variant="default">
              <List />
              Todas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Blocks />
              Não Finalizadas
            </Badge>
            <Badge className="cursor-pointer" variant="outline">
              <Check />
              Concluidas
            </Badge>
          </div>

          <div className="mt-4  border-b">
            {taskList.map((task) => (
              <div
                className="h-14 flex justify-between items-center  border-t"
                key={task.id}
              >
                <div className="w-1 h-full bg-green-300"></div>
                <p className="flex-1 px-2 text-sm">{task.task}</p>

                <div className="flex gap-2">
                  <EditTask />

                  <Trash
                    size={16}
                    className="cursor-pointer hover:size-4.5 duration-100"
                    onClick={() => handleDeleteTask(task.id)}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between mt-4">
            <div className="flex gap-2 items-center">
              <ListCheck size={18} />
              <p className="text-xs">Tarefas Concluidas (3/3)</p>
            </div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button
                  variant="outline"
                  className="text-xs h-7 cursor-pointer"
                >
                  <Trash />
                  Limpar Tarefas Concluidas
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Tem Certeza que deseja exluir x items?
                  </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogAction>Sim</AlertDialogAction>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <div className="h-2 w-full bg-gray-100 mt-4 rounded-md">
            <div
              className="h-full bg-blue-500 rounded-md"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-end items-center mt-2 gap-2">
            <Sigma size={18} />
            <p className="text-xs">3 Tarefas no total</p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
