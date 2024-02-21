import { useEffect, useState } from "react";
import { Categorie } from "../models/Categorie";
import { fetchData } from "../services/FetchService";

export const SelectionCategorie: React.FC = () => {
  const [listeCategorie, setListeCategorie] = useState<Categorie[]>();

  useEffect(() => {
    fetchData("https://opentdb.com/api_category.php").then((reponse) => {
      setListeCategorie([...reponse.trivia_categories]);
    });
  }, []);

  return (
    <select name="categorie" id="categorySelect" className="form-select">
      <option value="default">Select a category</option>
      {listeCategorie?.map((categorie) => (
        <option value={categorie.name} key={categorie.id}>
          {categorie.name}
        </option>
      ))}
    </select>
  );
};
