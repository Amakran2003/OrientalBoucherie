export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
      description: 'Name of the site',
    },
    {
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      description: 'Description for SEO and social shares',
      rows: 3,
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          description: 'Format: 02 48 51 77 78',
        },
        {
          name: 'address',
          title: 'Address',
          type: 'text',
          rows: 2,
        },
        {
          name: 'mapEmbedCode',
          title: 'Google Maps Embed Code',
          type: 'text',
          description: 'Paste the Google Maps iframe embed code here',
          rows: 5,
        },
      ],
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  { title: 'Lundi', value: 'Lundi' },
                  { title: 'Mardi', value: 'Mardi' },
                  { title: 'Mercredi', value: 'Mercredi' },
                  { title: 'Jeudi', value: 'Jeudi' },
                  { title: 'Vendredi', value: 'Vendredi' },
                  { title: 'Samedi', value: 'Samedi' },
                  { title: 'Dimanche', value: 'Dimanche' },
                ],
              },
            },
            {
              name: 'morningOpen',
              title: 'Morning Open Time',
              type: 'string',
              description: 'E.g. 8h30',
            },
            {
              name: 'morningClose',
              title: 'Morning Close Time',
              type: 'string',
              description: 'E.g. 13h00',
            },
            {
              name: 'afternoonOpen',
              title: 'Afternoon Open Time',
              type: 'string',
              description: 'Leave empty if closed in the afternoon',
            },
            {
              name: 'afternoonClose',
              title: 'Afternoon Close Time',
              type: 'string',
              description: 'Leave empty if closed in the afternoon',
            },
            {
              name: 'isClosed',
              title: 'Closed',
              type: 'boolean',
              description: 'Check if closed this day',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'day',
              morning: 'morningOpen',
              morningClose: 'morningClose',
              afternoon: 'afternoonOpen',
              afternoonClose: 'afternoonClose',
              closed: 'isClosed',
            },
            prepare({
              title,
              morning,
              morningClose,
              afternoon,
              afternoonClose,
              closed,
            }: {
              title: string;
              morning: string;
              morningClose: string;
              afternoon: string;
              afternoonClose: string;
              closed: boolean;
            }) {
              const hours = closed
                ? 'Fermé'
                : afternoon
                ? `${morning}-${morningClose} | ${afternoon}-${afternoonClose}`
                : `${morning}-${morningClose}`;
              return {
                title: `${title}: ${hours}`,
              };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'siteName',
      subtitle: 'siteDescription',
    },
  },
};