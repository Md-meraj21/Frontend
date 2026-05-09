// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((res)=> {
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data1 is = ",data.fact );
//     return fetch(url);

// })
// .then((res)=> {
//     return res.json();
// })
// .then((data)=>{
//     console.log("Data2 is = ",data.fact );
// })
// .catch((err) =>{
//     console.log("Error- ",err);
// })

// async function getfact() {
//     try {
//         let res =await fetch(url);
//         let data1 = await res.json();
//         console.log(data1.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch (error) {
//         console.log("The Error is ",error);
//     }
//     console.log("Hello Marinda");
// }

//Cat Api

// let button = document.querySelector("button");
// addEventListener("click",async ()=> {
//     let fun = await Getid();
//     // console.log(fun);
//     let p = document.querySelector("#para");
//     p.innerText = fun;
// })


// async function Getid() {
//     try {
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch (error) {
//         console.log("Error",error);
//         return "Not Found";
//     }
// }


//Dog Api

// let url = "https://dog.ceo/api/breeds/image/random";


// document.querySelector("button").addEventListener("click",async()=>{
//     let link = await Getimg();
//     document.querySelector("#para").setAttribute("src",link);
//     console.log(link);  

// })

// async function Getimg() {
//     try {
//         let res = await axios.get(url);
//         return res.data.message;
//     } catch (error) {
//         console.log(error);
//         return "No Found Image";     
//     }
// }
  

//jokes

const url = "https://icanhazdadjoke.com";


async function Getjoke() {
    try {
        const config  = {headers: {Accept:"application/json"}};
        let link =await axios.get(url,config);
        console.log(link.data);
    } catch (error) {
        console.log(error);
    }
}