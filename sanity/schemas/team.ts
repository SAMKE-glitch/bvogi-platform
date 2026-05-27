import { defineType, defineField } from 'sanity';

export const team = defineType({
  name: 'team',
  title: 'Leadership & Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Position Title',
      type: 'string',
      description: 'e.g., Chairman, Secretary, Treasurer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Leadership Category',
      type: 'string',
      options: {
        list: [
          { title: '🏛️ Board of Trustees', value: 'trustees' },
          { title: '⭐ National Executive Committee (NEC)', value: 'nec' },
          { title: '📋 Chapter Leadership', value: 'chapter' },
          { title: '🙏 Ministry Team', value: 'ministry' },
          { title: '💼 Advisory Board', value: 'advisory' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Leadership Role',
      type: 'string',
      options: {
        list: [
          { title: 'Chairperson', value: 'chairperson' },
          { title: 'Vice Chairperson', value: 'vice_chair' },
          { title: 'Secretary General', value: 'secretary' },
          { title: 'Treasurer', value: 'treasurer' },
          { title: 'Organizing Secretary', value: 'organizing' },
          { title: 'Prayer Coordinator', value: 'prayer' },
          { title: 'Communications Director', value: 'communications' },
          { title: 'Youth Leader', value: 'youth' },
          { title: 'Member', value: 'member' },
        ],
      },
    }),
    defineField({
      name: 'termStart',
      title: 'Term Start Date',
      type: 'date',
      description: 'When did this term begin?',
    }),
    defineField({
      name: 'termEnd',
      title: 'Term End Date',
      type: 'date',
      description: 'When does this term end? (For elected positions)',
    }),
    defineField({
      name: 'isCurrentTerm',
      title: 'Currently Serving',
      type: 'boolean',
      description: 'Is this person currently in office?',
      initialValue: true,
    }),
    defineField({
      name: 'biography',
      title: 'Biography / Profile',
      type: 'text',
      description: 'Brief bio, achievements, and responsibilities',
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
        { name: 'caption', title: 'Caption', type: 'string' },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'email',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        { name: 'facebook', title: 'Facebook', type: 'url' },
        { name: 'twitter', title: 'Twitter/X', type: 'url' },
        { name: 'instagram', title: 'Instagram', type: 'url' },
        { name: 'linkedin', title: 'LinkedIn', type: 'url' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 0,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Leader',
      type: 'boolean',
      description: 'Show on homepage leadership section',
      initialValue: false,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      type: 'boolean',
      description: 'Show this leader on the website',
      initialValue: true,
    }),
  ],
  orderings: [
    {
      title: 'Category then Order',
      name: 'categoryOrder',
      by: [
        { field: 'category', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
    {
      title: 'Current Term First',
      name: 'currentTerm',
      by: [
        { field: 'isCurrentTerm', direction: 'desc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'photo',
      category: 'category',
    },
    prepare(selection) {
      const { title, subtitle, media, category } = selection;
      
      // Type-safe category mapping
      type CategoryKey = 'trustees' | 'nec' | 'chapter' | 'ministry' | 'advisory';
      
      const categoryLabel: Record<CategoryKey, string> = {
        trustees: 'Board of Trustees',
        nec: 'NEC',
        chapter: 'Chapter Leadership',
        ministry: 'Ministry Team',
        advisory: 'Advisory Board',
      };
      
      const label = categoryLabel[category as CategoryKey] || category;
      
      return {
        title: title,
        subtitle: `${label} - ${subtitle || 'Member'}`,
        media: media,
      };
    },
  },
});
