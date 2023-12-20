const mongoose = require("mongoose");

const courseSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

const courseModel =
  mongoose.models.Course || mongoose.model("Course", courseSchema);

export default courseModel;
