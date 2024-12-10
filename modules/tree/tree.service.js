import mongoose from "mongoose";
import {Tree} from "./tree.model.js"; // Assuming your tree schema is exported from "tree.model.js"

const getTreesFromDB = async () => {
  try {
    const result = await Tree.find(); // Fetch all trees from the database
    return result;
  } catch (error) {
    throw new Error("Failed to fetch trees from the database");
  }
};

const addTreeToDB = async (treeData) => {
  try {
    const newTree = new Tree(treeData); // Create a new tree document
    const result = await newTree.save(); // Save to the database
    return result;
  } catch (error) {
    throw new Error("Failed to add tree to the database");
  }
};

// Delete tree by ObjectId
const deleteTreeFromDB = async (id) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await Tree.findByIdAndDelete(objectId); // Delete tree by its ObjectId
    return result;
  } catch (error) {
    throw new Error("Failed to delete tree from the database");
  }
};

// Update tree by ObjectId
const updateTreeInDB = async (id, treeData) => {
  try {
    const objectId = new mongoose.Types.ObjectId(id);
    const result = await Tree.findByIdAndUpdate(objectId, treeData, { new: true }); // Update tree and return the updated document
    return result;
  } catch (error) {
    throw new Error("Failed to update tree in the database");
  }
};

export const TreeServices = { getTreesFromDB, addTreeToDB, deleteTreeFromDB, updateTreeInDB };
