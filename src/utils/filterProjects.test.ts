import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProjects, Project } from './filterProjects';

const sampleProjects: Project[] = [
  {
    id: 'reine-noisette',
    title: 'Reine Noisette',
    subtitle: 'Artisan pastry showcase website',
    category: 'Lifestyle',
    description: 'Showcase website for an artisan pastry brand.',
    image: '/projects/reine-noisette/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/reine-noisette/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Artisan pastry presentation', 'Custom celebration cakes', 'Product gallery'],
  },
  {
    id: 'coin-de-beaute-by-yosr',
    title: 'Coin de Beauté by Yosr',
    subtitle: 'Beauty products storefront',
    category: 'E-commerce',
    description: 'A beauty storefront for perfumes and skincare products.',
    image: '/projects/coin-de-beaute-by-yosr/preview.jpg',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: '/projects/coin-de-beaute-by-yosr/index.html',
    githubUrl: '',
    featured: true,
    highlights: ['Product categories', 'Shopping cart interface', 'Favorites interface'],
  },
];

test('filterProjects filters by category', () => {
  const ecommerceProjects = filterProjects(sampleProjects, 'E-commerce');
  assert.equal(ecommerceProjects.length, 1);
  assert.equal(ecommerceProjects[0].id, 'coin-de-beaute-by-yosr');

  const all = filterProjects(sampleProjects, 'All');
  assert.equal(all.length, 2);
});

test('filterProjects searches across title and technologies', () => {
  const pastryProjects = filterProjects(sampleProjects, 'All', 'custom celebration cakes');
  assert.equal(pastryProjects.length, 1);
  assert.equal(pastryProjects[0].title, 'Reine Noisette');

  const titleSearch = filterProjects(sampleProjects, 'All', 'coin de beauté');
  assert.equal(titleSearch.length, 1);
  assert.equal(titleSearch[0].id, 'coin-de-beaute-by-yosr');

  const noMatches = filterProjects(sampleProjects, 'All', 'nonexistent-query-xyz');
  assert.equal(noMatches.length, 0);
});
