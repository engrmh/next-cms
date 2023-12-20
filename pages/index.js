import Course from "@/components/templates/index/Course";
import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

const index = () => {
  return <Course />;
};

export async function getStaticProps(context) {
  connectToDB();
  const courses = await courseModel.find({});
  
  return {
    props: {},
  };
}
export default index;
