interface ButtonNavigateProps {
  onClickOnButtonNavigate: () => void;
  buttonText: string;
}

export const ButtonNavigate: React.FC<ButtonNavigateProps> = (
  props: ButtonNavigateProps
) => {
  const { onClickOnButtonNavigate, buttonText } = props;

  return (
    <button className="submit-btn" onClick={onClickOnButtonNavigate}>
      {buttonText}
    </button>
  );
};
