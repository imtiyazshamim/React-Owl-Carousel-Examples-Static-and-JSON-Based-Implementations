import React from 'react'
import './Card.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Card() {
    const options = {
        loop: true,
		margin: 30,
		autoplay: true,
		dots:false,
    nav:true,
		autoplayTimeout: 8500,
		smartSpeed: 450,
        navText: [
            '<i class="fa fa-angle-left"></i>', 
            '<i class="fa fa-angle-right"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            },
        },
        };

  return (
    <div className=' slider pb-20 'id="customers-testimonials-2">
    <div className='container'>
    <div className='text-center py-10'>
                    <h1 className='text-white'> React JS Static OwlCarousel</h1>
                </div>
        <OwlCarousel className='owl-theme' {...options}>
            <div class='item'>
                <div className='img-responsive'>
                <img src={"https://image.freepik.com/free-photo/spaghetti-with-carbonara-sauce_1216-324.jpg"} className="" alt=''/>
                </div>
                <div className='slider-info '>
                   
                <h5>Chicken for two Roasted <span>$21</span></h5>
									<p>There was a time when Chinese food in this country meant (Americanized) Cantonese food.</p>
                </div>
            </div>
            <div class='item'>
                <div className='img-responsive'>
                <img src={"https://image.freepik.com/free-photo/dishes-with-healthy-waffles_1220-367.jpg"} className="" alt=''/>
                </div>
                <div className='slider-info '>
                   
                <h5>Chicken for two Roasted <span>$21</span></h5>
									<p>There was a time when Chinese food in this country meant (Americanized) Cantonese food.</p>
                </div>
            </div>
            <div class='item'>
                <div className='img-responsive'>
                <img src={"https://image.freepik.com/free-photo/top-view-of-tasty-noodles-with-prawns_1203-1769.jpg"} className="" alt=''/>
                </div>
                <div className='slider-info '>
                   
                <h5>Chicken for two Roasted <span>$21</span></h5>
									<p>There was a time when Chinese food in this country meant (Americanized) Cantonese food.</p>
                </div>
            </div>
            <div class='item'>
                <div className='img-responsive'>
                <img src={"https://image.freepik.com/free-photo/burguer-with-garnish_1088-72.jpg"} className="" alt=''/>
                </div>
                <div className='slider-info '>
                   
                <h5>Chicken for two Roasted <span>$21</span></h5>
									<p>There was a time when Chinese food in this country meant (Americanized) Cantonese food.</p>
                </div>
            </div>

            <div class='item'>
                <div className='img-responsive'>
                <img src={"https://image.freepik.com/free-photo/delicious-pastry-with-chicken_1203-1616.jpg"} className="" alt=''/>
                </div>
                <div className='slider-info '>
                   
                <h5>Chicken for two Roasted <span>$21</span></h5>
									<p>There was a time when Chinese food in this country meant (Americanized) Cantonese food.</p>
                </div>
            </div>

           
        </OwlCarousel>
        </div>
    
    </div>
  )
}

export default Card