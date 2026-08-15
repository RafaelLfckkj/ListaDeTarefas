"use server";

import { prisma } from "@/utils/prisma";

type EditTaskProps = {
  idTask: string;
  NewTask: string;
};

export const editTask = async ({ idTask, NewTask }: EditTaskProps) => {
  try {
    if (!idTask || !NewTask) return;

    const editTask = await prisma.tasks.update({
        where: {id: idTask},
        data: {task: NewTask}
    })

    if(!editTask) return
  } catch (error) {
    throw error;
  }
};
