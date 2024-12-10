import Tree from "./tree.model"; // Assuming your tree schema is exported from "tree.model.js"

const getTreesFromDB = async () => {
  try {
    const result = await Tree.find(); // Fetch all trees from the database
    return result;
  } catch (error) {
    throw new Error("Failed to fetch trees from the database"); // Handle potential errors
  }
};

const addTreeToDB = async (treeData) => {
  try {
    const newTree = new Tree(treeData); // Create a new tree document
    const result = await newTree.save(); // Save to the database
    return result;
  } catch (error) {
    throw new Error("Failed to add tree to the database"); // Handle potential errors
  }
};

export const TreeServices = { getTreesFromDB, addTreeToDB };
