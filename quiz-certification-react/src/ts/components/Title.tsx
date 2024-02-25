interface TitleProps {
  title: string;
}
export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { title } = props;

  return (
    <h1 className="h1" style={{ marginBottom: "1em" }}>
      {title}
    </h1>
  );
};
