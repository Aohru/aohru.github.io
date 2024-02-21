export const SelectionDifficulte: React.FC = () => {

  const difficultes = ["Easy", "Medium", "Hard"];

  return (
    <select
      name="difficulte"
      id="difficultySelect"
      className="form-select"

    >
      <option value="">Select difficulty</option>
      {difficultes.map((difficulte, index) => (
        <option key={index}>{difficulte}</option>
      ))}
    </select>
  );
};
