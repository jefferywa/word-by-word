import "./Progress.css";

export const Progress = ({ value }: { value: number }) => {
  return <div className="progress" style={{ "--progress": `${value}%` }} />;
};
