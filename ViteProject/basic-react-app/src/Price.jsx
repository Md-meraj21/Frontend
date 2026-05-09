export default function Price({ oldPrice, newPrice }) {
    let oldstyle = {
        textDecorationLine: "Line-through",
    };
    let newstyle = { fontWeight: "bold", };
    let styles = { backgroundColor: "#e0c367",
         hight: "50px",
         borderBottomLeftRadius: "14px",
         borderBottomRightRadius: "14px",}
    return (
        <div style={styles}>
            <span style={oldstyle}>${oldPrice}</span>
            &nbsp;
            <span style={newstyle} >${newPrice}</span>
        </div>
    )
}