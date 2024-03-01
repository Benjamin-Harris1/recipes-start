import { Route, Routes } from "react-router-dom";
import { Categories } from "./recipes/Categories";
import Recipe from "./recipes/Recipe";
//import Recipes from "./recipes/RecipeList";
import RecipeForm from "./recipes/RecipeForm";
import RecipesLayout from "./recipes/RecipesLayout";
import Login from "./security/Login";
//import Logout from "./security/_Logout";
import Layout from "./Layout";
import Home from "./Home";
import "./App.css";
import ContactPage from "./recipes/ContactPage";
import PageNotFound from "./recipes/PageNotFound";
import Logout from "./security/Logout";
import RequireAuth from "./security/RequireAuth";

export default function App() {
  //const auth = useAuth();
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/" element={<Categories />} />
        <Route path="/recipes" element={<RecipesLayout />}>
          {/**<Route path="test" element={<h1>Test</h1>} />*/}
          <Route path=":id" element={<Recipe />} />
        </Route>
        <Route path="/add" element={
          <RequireAuth roles={["ADMIN"]}>
            <RecipeForm />
          </RequireAuth>
        } />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Layout>
  );
}
