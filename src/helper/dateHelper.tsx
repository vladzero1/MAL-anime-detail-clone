const map = [
  "Jan",
  "Feb",
  "mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const monthNumtoString = (month: number): string => {
  return map[month];
};

export const time24Hourto12Hour = (date: Date) => {
  const hour = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  const AMPM = date.getHours() > 12 ? "PM" : "AM";
  return {
    hour,
    AMPM,
  };
};
