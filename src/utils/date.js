import format from 'date-fns/format';

export const formatHumanReadableDate = (date) => `${format(new Date(date), 'PPPP')}`;
export const formatHumanReadableDateShort = (date) => `${format(new Date(date), `EEE MMM do '•' h:mm a`)}`;
