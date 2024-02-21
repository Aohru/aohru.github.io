import { SelectionCategorie } from "./SelectionCategorie";
import { SelectionDifficulte } from "./SelectionDifficulte";

export const ChoixQuiz: React.FC = () => {
  return (
    <div className="row">
      <div className="col-lg-5">
        <SelectionCategorie />
      </div>
      <div className="col-lg-5">
        <SelectionDifficulte />
      </div>
      <div className="col-lg-2">
        <button id="createBtn">Create</button>
      </div>
    </div>
  );
};
