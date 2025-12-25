import ProjectDetailsCard from "@/components/modules/Projects/ProjectDetailsCard";
import { Metadata } from "next";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  features: string[];
  thumbnail?: string;
  liveUrl?: string;
  repoUrl?: string;
  createdAt: string;
}

interface Props {
  params: { projectId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${params.projectId}`,
    { next: { revalidate: 30 } }
  );
  const json = await res.json();
  const project: Project = json.data;
  return {
    title: project?.title || "Project Details",
    description: project?.description || "Project information",
  };
}

const ProjectDetailsPage = async ({ params }: Props) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/project/${params.projectId}`,
    { next: { revalidate: 30 } }
  );
  const { data: project }: { data: Project } = await res.json();

  if (!project)
    return <p className="text-center text-red-500 mt-10">Project not found.</p>;

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <ProjectDetailsCard {...project} />
    </main>
  );
};

export default ProjectDetailsPage;
