import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { addCategory } from "../services/apiFacade";
import './RecipeForm.css'; // Assuming you're reusing the same CSS for consistency

// Assuming a Category type/interface is defined somewhere
interface Category {
  id: number | null;
  name: string;
}

const EMPTY_CATEGORY = { id: null, name: "" };

export default function CategoryForm() {
  const location = useLocation();
  const categoryToEdit: Category = location.state || EMPTY_CATEGORY;
  const [category, setCategory] = useState<Category>(categoryToEdit);

  useEffect(() => {
    // If the component is re-mounted with a different category to edit,
    // update the state accordingly. This is useful if the form is used in a modal or similar scenario.
    setCategory(location.state || EMPTY_CATEGORY);
  }, [location.state]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategory(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await addCategory(category);
      alert(`Category ${category.id ? "updated" : "added"} successfully!`);
      setCategory(EMPTY_CATEGORY); // Reset form
    } catch (error) {
      alert("An error occurred while processing the category");
    }
  };
  
  return (
    <div>
      <h2>{category.id ? "Edit Category" : "Add New Category"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Category Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={category.name}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="recipe-form-btn">
          {category.id ? "Update Category" : "Add Category"}
        </button>
      </form>
    </div>
  );
}