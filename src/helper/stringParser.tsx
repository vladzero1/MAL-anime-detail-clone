export const parseStringToHaveNewLine = (string: string): React.ReactNode => {
  return string.split("\n").map((item, index) => {
    if (index === 0) return <span key={`paragraph ${index}`}>{item}</span>;
    return <p key={`paragraph ${index}`}>{item}</p>;
  });
};
