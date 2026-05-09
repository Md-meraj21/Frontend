import "./Product.css";
import Price from "./Price";
function Product({title, price , idx}) {
    let oldPrices = ["24","3785","66","7878"];
    let newPrices = ["2343","532","963","68856"];
    let Description = ["8000 DPI","Hai tu mast ","Kaha hai tu", "I miss you very much"];
    return (
       <div className="Product">
       <h3>{title}</h3>
       <p>D{Description[idx]}</p>
       <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
       </div>
    );
};

export default Product;