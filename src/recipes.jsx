import GreekSalad from './assets/greek-salad.jpg';
import Bruchetta from './assets/bruchetta.svg';
import LemonDessert from './assets/lemon-dessert.jpg'

const recipes = [
    {
        id:1,
        title: "Greek Salad",
        price: 12.99,
        image: GreekSalad,
        description: "The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
        id:2,
        title: "Bruchetta",
        price: 5.99,
        image: Bruchetta,
        description: "Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    },
    {
        id:3,
        title: "Lemon Dessert",
        price: 4.78,
        image: LemonDessert,
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced organically and is as authentic as can be imagined.",
    },
];

export default recipes;