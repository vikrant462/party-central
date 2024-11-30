import { format, formatDistance, formatRelative, isValid } from 'date-fns';

export const formatDate = (date: Date | string): string => {
  const parsedDate = new Date(date);
  return isValid(parsedDate) ? format(parsedDate, 'PPP') : 'Invalid date';
};

export const formatTime = (date: Date | string): string => {
  const parsedDate = new Date(date);
  return isValid(parsedDate) ? format(parsedDate, 'p') : 'Invalid time';
};

export const getRelativeTime = (date: Date | string): string => {
  const parsedDate = new Date(date);
  return isValid(parsedDate) 
    ? formatDistance(parsedDate, new Date(), { addSuffix: true })
    : 'Invalid date';
};

export const getRelativeTimeFromNow = (date: Date | string): string => {
  const parsedDate = new Date(date);
  return isValid(parsedDate)
    ? formatRelative(parsedDate, new Date())
    : 'Invalid date';
};