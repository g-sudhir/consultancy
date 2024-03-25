import Card from "../Card/Card";
import style from "./Products.module.css";
import { data } from "../../data.js";
export default function Products() {
  return (
    <div id={style.product_section}>
    <h1 className={style.section_title}>PRODUCTS</h1>
    <div className={style.product}>
      {data.map((value)=>{
        return <Card img={value.image} description={value.description} name={value.product_name} price={value.price}/>
      })}
      {/* <Card img={data.demo} name="Ghee" description="Ghee is a type of clarified butter originating from India, widely used for cooking, traditional medicine, and religious ceremonies."/>
      <Card img={data.demo} name="Butter" description="A creamy staple with versatile uses
Butter is a beloved dairy product enjoyed worldwide for its richness, flavor, and versatility."/>
      <Card img={data.demo} name="Curd" description="Curd, also known as dahi in some cultures, is a versatile food product made by coagulating milk."/> */}
    </div>
    </div>
  );
}
