// import { AllBlogs } from "@/components/modules/Blogs/AllBlogs";
// import { BlogData } from "@/types";

export const metadata = {
  title: "All Blogs | Imran Khan",
  description:
    "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
};

export const revalidate = 30;

const AllBlogsPage = async () => {
 

  return(
    <div><h1>Blogs</h1></div>
  )
};

export default AllBlogsPage;
