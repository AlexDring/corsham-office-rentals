import { FiCheckSquare } from 'react-icons/fi'

export default {
  name: 'availableSpace',
  title: 'Available Space',
  type: 'object',
  icon: FiCheckSquare,  
  fields: [
    {
      name: 'title',
      title: 'Availability Header',
      type: 'string',
    },
    {
      name: 'availabilitySelect',
      title: 'Availability',
      type: 'array',
      of: [
        { 
          name: 'availablity',
          title: 'Current Availability',
          type: 'availablity'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title, media }) {
      return {
        title,
        subtitle: 'Availability section',
        media,
      };
    },
  },
}