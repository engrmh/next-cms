import Courses from "@/components/templates/index/Course";
import connectToDB from "@/utils/db";
import courseModel from "@/models/course";

const index = ({ courses }) => {
  return <Courses courses={courses} />;
};

export async function getStaticProps(context) {
  connectToDB();
  const courses = await courseModel.find({});

  return {
    props: {
      courses: JSON.parse(JSON.stringify(courses)),
    },
    revalidate: 60 * 60 * 12,
  };
}
export default index;
