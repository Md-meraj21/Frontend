function dosomthing(event) {
    console.log("It is Clicked !")
    console.log(event)


}

function dose() {
    return (
        console.log("It is Clicked !")
    );
}

function Bye() {
    return (
        console.log("Chala ja BKDS! FAHHHHHH !!")
    )
}

export default function Button() {
    return (
        <>
            <button onClick={dosomthing}>Click me!</button>
            <p onMouseOver={Bye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt esse ad eaque aut iusto nulla iste natus exercitationem veniam doloremque recusandae nostrum, sapiente obcaecati fugiat omnis. Quia quisquam amet corrupti!</p>
            <button onDoubleClick={dose}>See the magic !</button>
        </>
    )
}