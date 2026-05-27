import { defineType, defineField } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'logo',
      title: 'Site Logo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
      description: 'Upload BVOGI logo (PNG with transparent background recommended)',
    }),
    defineField({
      name: 'heroBackground',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
      description: 'Upload background image for the hero section',
    }),
    defineField({
      name: 'heroOverlayOpacity',
      title: 'Hero Overlay Opacity',
      type: 'number',
      initialValue: 0.5,
      validation: (Rule) => Rule.min(0).max(1),
      description: 'Dark overlay opacity (0 = transparent, 1 = black)',
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      initialValue: 'BVOGI',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'Positioned for Global Impact',
    }),
    defineField({
      name: 'scripture',
      title: 'Featured Scripture',
      type: 'string',
      initialValue: 'Joel 2:1 - "Blow the Trumpet in Zion"',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'logo',
    },
  },
});
