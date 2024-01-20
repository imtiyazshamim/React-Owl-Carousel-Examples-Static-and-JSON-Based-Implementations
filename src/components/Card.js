import React from 'react';
import './Card.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const carouselData = [
    {
        imageUrl: "https://image.freepik.com/free-photo/spaghetti-with-carbonara-sauce_1216-324.jpg",
        price: "$210",
        heading: "Spaghetti Carbonara "  ,
        paragraph: "A classic Italian pasta dish with a rich, creamy sauce."
    },
    {
        imageUrl: "https://image.freepik.com/free-photo/dishes-with-healthy-waffles_1220-367.jpg",
        price: "$150",
        heading: "Healthy Waffles",
        paragraph: "Delicious and nutritious waffles perfect for a wholesome breakfast."
    },
    {
        imageUrl: "https://image.freepik.com/free-photo/top-view-of-tasty-noodles-with-prawns_1203-1769.jpg",
        heading: "Tasty Noodles with Prawns",
        price: "$180",
        paragraph: "Enjoy the blend of spices and fresh prawns in this delightful dish."
    },
    {
        imageUrl: "https://image.freepik.com/free-photo/burguer-with-garnish_1088-72.jpg",
        price: "$500",
        heading: "Classic Burger",
        paragraph: "Juicy and flavorful burger, a timeless choice for any meal."
    },
    {
        imageUrl: "https://image.freepik.com/free-photo/delicious-pastry-with-chicken_1203-1616.jpg",
        price: "$600",
        heading: "Chicken Pastry",
        paragraph: "Savory pastry filled with tender chicken and aromatic herbs."
    }
];

function Card() {
    const options = {
        loop: true,
        margin: 30,
        autoplay: true,
        dots: false,
        nav: true,
        
        navText: [
            '<i class="fa fa-angle-left"></i>', 
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            },
        },
    };

    return (
    
        <div className='slider pb-20' id="customers-testimonials">
            <div className='container'>
                <div className='text-center py-10'>
                    <h1>React JS Json OwlCarousel</h1>
                </div>
                <OwlCarousel className='owl-theme' {...options}>
                    {carouselData.map((item, index) => (
                        <div key={index} className='item'>
                            <div className='img-responsive'>
                                <img src={item.imageUrl} alt='' />
                            </div>
                            <div className='slider-info'>
                                <h5>{item.heading} <span>{item.price}</span></h5>
                                <p>{item.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </div>
    );
}

export default Card;
