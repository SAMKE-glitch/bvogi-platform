import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'bvogi-cms',
  title: 'BVOGI CMS',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  plugins: [structureTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
  
  // Critical for Next.js 16
  document: {
    productionUrl: async (prev, { dataset, document }) => {
      return `${process.env.NEXT_PUBLIC_SITE_URL}/studio`;
    },
  },
});
