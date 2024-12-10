import { TreeServices } from "./tree.service";

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

export const TreeControllers = { getTrees, inputTree };
