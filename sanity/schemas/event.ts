import { defineType, defineField } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'datetime',
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
    }),
    defineField({
      name: 'venue',
      title: 'Venue/Location',
      type: 'string',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Event Banner Image',
      type: 'image',
      options: {
        hotspot: true, // Enables cropping/focal point selection
      },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        },
        {
          name: 'caption',
          title: 'Caption',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Event Gallery Photos',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
      description: 'Additional photos from this event',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'speaker',
      title: 'Speaker/Speakers',
      type: 'string',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'bannerImage',
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        title: title,
        subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
        media: media,
      };
    },
  },
});
