import courseModel from "@/models/course";
import connectToDB from "@/utils/db";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();
  const { id } = req.query;

  if (isValidObjectId(id)) {
    if (req.method === "DELETE") {
      try {
        await courseModel.findOneAndDelete({ _id: id });
        return res.status(200).json({ message: "Deleted Successfully" });
      } catch (err) {
        return res.status(500).json({ message: "Enternal Server Error" });
      }
    }
    if (req.method === "PUT") {
      const { title } = req.body;
      try {
        await courseModel.findOneAndUpdate({ _id: id }, { title });
        return res.status(200).json({ message: "Updated Successfully" });
      } catch (err) {
        return res.status(500).json({ message: "Enternal Server Error" });
      }
    }
  } else {
    return res.json(422).json({ message: "Course ID not valid" });
  }
};

export default handler;
