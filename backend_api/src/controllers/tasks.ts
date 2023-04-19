import { Request, Response } from 'express';
import Task from '../models/Task';
import Project from '../models/Projects';

export const createTask = async (req: Request, res: Response) => {
  const { name, description, assignedTo, dueDate, status, projectId } = req.body;

  try {
    const task = new Task({
      name,
      description,
      assignedTo,
      dueDate: dueDate || new Date(), // if no due date is provided, set it to 10 days from today
      status,
    });

    const savedTask = await task.save();

    // now add the project to the group
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    project.tasks.push(savedTask);
    await project.save();

    res.json(savedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export default {
    createTask
}