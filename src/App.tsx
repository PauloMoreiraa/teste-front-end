import Banner from "./components/banner/banner";
import Brands from "./components/brands/brands";
import Categories from "./components/categories/categories";
import Footer from "./components/footer/footer";
import Menu from "./components/menu/menu";
import Partners from "./components/partners/partners";
import Products from "./components/products/products";
import "./styles/global.css";

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Categories />
      <main>
        <Products
          title="Produtos relacionados"
          options={[
            "Celular",
            "Acessórios",
            "Tablets",
            "Notebooks",
            "TVS",
            "Ver todos",
          ]}
        />
        <Partners />
        <Products title="Produtos relacionados" subtitle="Ver todos" />
        <Partners />
        <Brands />
        <Products title="Produtos relacionados" subtitle="Ver todos" />
      </main>
      <Footer />
    </>
  );
}

export default App;
