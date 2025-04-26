export const useFormatDate = () => {
  const formatDate = (dateString: string | undefined) => {
    // Check if dateString is valid before creating a Date object
    if (!dateString) {
      return 'Date non disponible';
    }
    
    try {
      const date = new Date(dateString);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return 'Date non disponible';
      }
      
      return new Intl.DateTimeFormat('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      }).format(date);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date non disponible';
    }
  };

  return { formatDate };
};
