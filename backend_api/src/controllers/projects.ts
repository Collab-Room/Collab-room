import { Request, Response } from 'express';
import Project from '../models/Projects';
import Group from '../models/Group';

const createProject = async (req: Request, res: Response) => {
  try {
    const {
      groupID,
      name,
      description,
      teamLeader,
      startDate,
      endDate,
      status,
    } = req.body;

    const project = new Project({
      name,
      description,
      teamLeader: teamLeader || req.body.User.id,
      startDate: startDate || new Date(),
      endDate: endDate || new Date(),
      status: status || 'To Do',
    });

    await project.save();

    // now add the project to the group
    const group = await Group.findById(groupID);
    if (!group) {
      throw new Error(`Group with id ${groupID} not found`);
    }
  
    group.projects.push(project._id);
    await group.updateOne({ projects: group.projects });

    res.status(201).json({ success: true, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const {
      name,
      description,
      teamLeader,
      startDate,
      endDate,
      status,
    } = req.body;

    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    project.name = name;
    project.description = description;
    project.teamLeader = teamLeader;
    project.startDate = startDate;
    project.endDate = endDate;
    project.status = status;

    await project.save();
    res.status(200).json({ success: true, project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) {
      return res.status(404).json({ success: false, message: 'Project not found' });
    }
    res.status(200).json({ success: true, message: 'Project deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export default {
    createProject,
    getProjectById,
    updateProject,
    deleteProject
}