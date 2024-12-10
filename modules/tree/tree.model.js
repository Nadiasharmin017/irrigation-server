const mongoose = require('mongoose');

const treeSchema = new mongoose.Schema({
  refId: {
    type: mongoose.Schema.Types.ObjectId, // Assuming customerID is an ObjectId
    required: true,
    ref: 'Customer', // Reference to the Customer model
  },
  tree1: {
    treeId: {
      type: mongoose.Schema.Types.ObjectId, // Assuming treeId is an ObjectId
      required: true,
    },
    topNO: {
      type: Number, // Top number (e.g., ranking or position)
      required: true,
    },
    details: {
      treeName: {
        type: String,
        required: true,
      },
      treeHeight: {
        type: Number, // Tree height in meters or any unit
        required: true,
      },
      treeCategory: {
        type: String, // Category of the tree (e.g., Fruit, Ornamental, etc.)
        required: true,
      },
    },
    // sensorData: {
    //   type: mongoose.Schema.Types.Mixed, // Placeholder for any data structure
    //   default: {},
    // },
    motorRun: {
      state: {
        type: Boolean, // True or false (motor is on/off)
        required: true,
      },
      time: {
        type: Number, // Time in seconds
        required: true,
      },
    },
  },
});

export const Tree = mongoose.model("Tree", treeSchema);
