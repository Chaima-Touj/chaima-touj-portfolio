export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  highlights: string[];
  note?: string;
}

export function filterProjects(
  projects: Project[],
  category: string,
  searchQuery: string = ''
): Project[] {
  const query = searchQuery.trim().toLowerCase();

  return projects.filter((project) => {
    const matchesCategory =
      category === 'All' || project.category.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) return false;
    if (!query) return true;

    const searchable = [
      project.title,
      project.subtitle,
      project.description,
      project.category,
      ...project.technologies,
      ...project.highlights,
    ].join(' ').toLowerCase();

    return searchable.includes(query);
  });
}
