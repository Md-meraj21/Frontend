import Title from "./Title"
import Product from "./Product";
function ProductTab() {
    let styles = {
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center", 
    };
    return (
        <div style={styles}>
            <Product title="You are mine" idx={0} />
            <Product title="You are yours" idx={1} />
            <Product title="You are Hers" idx={2} />
            <Product title="You are Direct" idx={3} />

        </div>

    )
}
export default ProductTab;