import { defineType, defineField } from 'sanity';

export const termSettings = defineType({
  name: 'termSettings',
  title: 'Term Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'currentYear',
      title: 'Current Term Year',
      type: 'string',
      description: 'e.g., 2024-2025',
    }),
    defineField({
      name: 'electionDate',
      title: 'Next Election Date',
      type: 'datetime',
    }),
    defineField({
      name: 'termDuration',
      title: 'Term Duration (Years)',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'displayPreviousTerms',
      title: 'Show Previous Term Members',
      type: 'boolean',
      description: 'Display members from previous terms on website',
      initialValue: false,
    }),
  ],
});
