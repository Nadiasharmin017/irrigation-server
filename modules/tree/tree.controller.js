import { TreeServices } from "./tree.service.js";

const getTrees = async (req, res) => {
  try {
    const result = await TreeServices.getTreesFromDB();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const inputTree = async (req, res) => {
  try {
    const treeData = req.body; // Tree data from the request body
    const result = await TreeServices.addTreeToDB(treeData);
    res.status(201).send(result);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const deleteTree = async (req, res) => {
  try {
    const { id } = req.params; // Extract tree ID from request params
    const result = await TreeServices.deleteTreeFromDB(id);
    if (!result) {
      return res.status(404).send({ message: 'Tree not found' });
    }
    res.status(200).send({ message: 'Tree deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const updateTree = async (req, res) => {
  try {
    const { id } = req.params; // Extract tree ID from request params
    const treeData = req.body; // Tree data from the request body
    const result = await TreeServices.updateTreeInDB(id, treeData);
    if (!result) {
      return res.status(404).send({ message: 'Tree not found' });
    }
    res.status(200).send({ message: 'Tree updated successfully', data: result });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

export const TreeControllers = { getTrees, inputTree, deleteTree, updateTree };
