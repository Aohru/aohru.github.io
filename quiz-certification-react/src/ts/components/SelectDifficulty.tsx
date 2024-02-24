interface SelectDifficultyProps {
  setDifficultySelected: (difficulty: string) => void;
}

/**
 * 
 * @param props le setter des difficultés
 * @returns un composant liste déroulante permettant de sélectionner une difficulté
 */
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
        <option key={difficulty} value={difficulty}>{difficulty}</option>
      ))}
    </select>
  );
};
