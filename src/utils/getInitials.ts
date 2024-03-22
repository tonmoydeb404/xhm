const getInitials = (name: string): string => {
  if (typeof name !== 'string' || !name.trim()) {
    return 'U';
  }

  const words = name.trim().split(/\s+/);
  const initials = words.map(word => word.charAt(0).toUpperCase());

  return initials.join('');
};

export default getInitials;
