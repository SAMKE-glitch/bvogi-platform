import { defineType, defineField } from 'sanity';

export const registration = defineType({
  name: 'registration',
  title: 'Registration & Links',
  type: 'document',
  fields: [
    defineField({
      name: 'registrationLink',
      title: 'Registration Form Link',
      type: 'url',
      description: 'Google Form link for member registration',
      validation: (Rule) => Rule.required().uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'qrCodeImage',
      title: 'Registration QR Code Image',
      type: 'image',
      description: 'Upload the QR code image for registration',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'prayerMeetingLink',
      title: 'Prayer Meeting Link',
      type: 'url',
      description: 'Google Meet or Zoom link for Monday prayer meeting',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https'],
      }),
    }),
    defineField({
      name: 'prayerMeetingQrCode',
      title: 'Prayer Meeting QR Code',
      type: 'image',
      description: 'QR code for prayer meeting',
      options: { hotspot: true },
      fields: [
        { name: 'alt', title: 'Alt Text', type: 'string' },
      ],
    }),
    defineField({
      name: 'whatsappGroupLink',
      title: 'WhatsApp Group Link',
      type: 'url',
      description: 'Link to join BVOGI WhatsApp group',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'email',
      initialValue: 'info@bvogi.org',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'registrationLink',
    },
    prepare() {
      return {
        title: 'Registration & Links Settings',
      };
    },
  },
});
