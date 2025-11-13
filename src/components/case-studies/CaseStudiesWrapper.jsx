// SERVER COMPONENT
import { getCaseStudies } from "@/lib/strapi";

export default async function CaseStudiesWrapper({ children }) {
  const caseStudies = await getCaseStudies().catch(() => ({ data: [] }));

  return <>{children(caseStudies)}</>;
}
