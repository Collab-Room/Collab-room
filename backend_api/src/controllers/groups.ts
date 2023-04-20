import { Request, Response } from 'express';
import Group from '../models/Group';
import User from '../models/User';
import Project from '../models/Projects';

const createGroup = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const createdBy = req.body.User.id; // get the current logged-in user ID
    const group = await Group.create({ name, createdBy });
    res.status(201).json({ success: true, data: group });
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
};

const inviteMembers = async (req: Request, res: Response) => {
  const { groupId, email } = req.body;
  const group = await Group.findById(groupId);

  if (!group) {
    res.status(404).json({ message: 'Group not found' });
    return;
  }

  // Ensure that the user making the request is the team leader of the group
  if (group.createdBy.toString() !== req.body.User.id.toString()) {
    res.status(403).json({ message: 'Only the team leader can invite members' });
    return;
  }

  // Find the user with the given email
  const user = await User.findOne({ email });

  if (!user) {
    res.status(404).json({ message: 'User not found' });
    return;
  }

  // Add the user to the group if they are not already a member
  if (!group.members.includes(user._id)) {
    group.members.push(user._id);
    await group.save();
  }

  res.json({ message: 'User invited to group' });
}

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const { groupID } = req.body;
    const group = await Group.findById(groupID).populate('projects').exec();

      // Ensure that the user making the request is the team leader of the group
    if (group?.createdBy.toString() !== req.body.User.id.toString()) {
      res.status(403).json({ message: 'User not authorized' });
      return;
    }

    console.log('group', group);
    const groupProjects = group?.projects || [];
    return res.json(groupProjects);
  } catch (err) {
    console.error(err);
    return res.status(500).send('Server Error');
  }
};

export default {
    createGroup,
    inviteMembers,
    getAllProjects
}