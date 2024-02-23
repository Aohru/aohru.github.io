import { useEffect, useState } from "react";
import { fetchData } from "../services/FetchService";
import { Category } from "../models/Category";
interface SelectCategoryProps {
  setCategorySelected: (category: string) => void;
}
export const SelectCategory: React.FC<SelectCategoryProps> = (
  props: SelectCategoryProps
) => {
  const [categories, setCategories] = useState<Category[]>();
  const { setCategorySelected } = props;

  useEffect(() => {
    fetchData("https://opentdb.com/api_category.php").then((response) => {
      setCategories([...response.trivia_categories]);
    });
  }, []);

  return (
    <select
      id="categorySelect"
      className="form-select"
      onChange={(event: { target: { value: string } }) =>
        setCategorySelected(event.target.value)
      }
    >
      <option value="">Select a category</option>
      {categories?.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
