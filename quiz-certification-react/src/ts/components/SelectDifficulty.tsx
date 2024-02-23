interface SelectDifficultyProps {
  setDifficultySelected: (difficulty: string) => void;
}

export const SelectDifficulty: React.FC<SelectDifficultyProps> = (
  props: SelectDifficultyProps
) => {
  const { setDifficultySelected } = props;
  const difficulties = ["easy", "medium", "hard"];

  return (
    <select
      id="difficultySelect"
      className="form-select"
      onChange={(event: { target: { value: string } }) =>
        setDifficultySelected(event.target.value)
      }
    >
      <option value="">Select difficulty</option>
      {difficulties.map((difficulty) => (
        <option key={difficulty}>{difficulty}</option>
      ))}
    </select>
  );
};
