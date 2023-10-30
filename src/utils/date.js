import format from 'date-fns/format';
import parse from 'date-fns/parse';

export const formatHumanReadableDate = (date) => `${format(new Date(date), 'PPPP')}`;
export const formatHumanReadableDateShort = (date) => `${format(new Date(date), `EEE MMM do '•' h:mm a`)}`;
export const formatSessionDate = (monthAndYear) => {
  const parsedDate = parse(monthAndYear, 'yyyy-MM', new Date());
  return format(parsedDate, 'MMM, yyyy');
};
