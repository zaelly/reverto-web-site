
import p1_img from "./p1_img.jpeg"
import p2_img from "./p2_img.jpeg"
import p3_img from "./p3_img.jpeg"
import p4_img from "./p4_img.jpeg"
import p5_img from "./p5_img.jpeg"
import p6_img from "./p6_img.jpeg"

let all_product = [
    {
        id:1,
        name: "Lavanderia Roupas Coloridas",
        category:"unisex",
        image: p1_img,
        new_price: 50.0,
        old_price:80.5,
    },
    {
        id:2,
        name: "Calça",
        category:"Masculino",
        image: p2_img,
        new_price: 50.0,
        old_price:80.5,
    },
    {
        id:3,
        name: "Saia",
        category:"Feminino",
        image: p3_img,
        new_price: 50.0,
        old_price:80.5,
    },
    {
        id:4,
        name: "Chapéu",
        category:"Masculino",
        image: p4_img,
        new_price: 50.0,
        old_price:80.5,
    },
    {
        id:5,
        name: "Salto",
        category:"Feminino",
        image: p5_img,
        new_price: 50.0,
        old_price:80.5,
    },
    {
        id:6,
        name: "Sapato",
        category:"Masculino",
        image: p6_img,
        new_price: 50.0,
        old_price:80.5,
    }
];

function showItens(){
    return all_product;
}
showItens();