import React from 'react';
import Product from './Product';
import './Home.css';
function Home() {
    return( 
    
        <div className="home">

           <img className="home__image"
            src="https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Amazon-Prime-video-plans.jpg" alt=""/>          
  
        {/* // product id,title,price,rating,image */}
        {/* for 1st row */}
            <div className="home__row">


                <Product
                    id = "12321341"
                    title = "The Lean Startup:How constant innovation creates radically successful Business paperback"
                    price ={1156}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpY-r6kH4Qm09jZMFHQd15SSdCLl7eG1rURrW-gpcrLEFsilcZ-8C8pSjH7hgzhwFehps&usqp=CAU"
                    
                />

                <Product
                    id = "12321342"
                    title = "The sewing machine: the fastest sewing machine for home tailoring"
                    price ={9999}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxU4FiO45UYcyq_CEPnItwIRwU-EbXeCTBQ&usqp=CAU"
                    
                />
            
            </div>

        {/* for 2nd row */}
            <div className="home__row">


                <Product
                    id = "12321343"
                    title = "Full Touch Control Smart Watch Upgraded LCD Display "
                    price ={3499}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGSlvjXFGiDOjTsICxEjB9CK8yUTMNZzI9enrBJgkWrKwLGltYk4y4OlfDi-ZwKRitUe1Fx6z0&usqp=CAc"
                    
                />

                <Product
                    id = "12321344"
                    title = "Harpa Women's Maxi A-line Dress"
                    price ={651}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUjkcIeNTVdDAUoPq2jBECR0PE2E19-2c5CA&usqp=CAU"
                    
                />

                <Product
                    id = "12321345"
                    title = "Cadbury Silk Rakhi Special Potli,343g"
                    price ={585}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0fSU3vMQitine3U9IR8twUfGA1rprwp_j2Q&usqp=CAU"
                    
                />
            
            
            </div>
        {/* for 3rd row */}
            <div className="home__row">


                <Product
                    id = "12321346"
                    title = "81 cm (32 inch) HD Ready Certified Android Smart LED TV 32TA6445HD (Black) (2019 Model)"
                    price ={14999}
                    rating={5}
                    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMHPHDST5L8w0wVD33hzTSrl9Qud9fmR8JQ&usqp=CAU"
                    
                />

                
            </div>
     
        </div>
    );
    
}

export default Home