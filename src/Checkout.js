import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import './Checkout.css';


function Checkout() {
    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">

            <div className="checkout__left">


                <img className="checkout__ad" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYsc4CLIJZ7xqLXYB5Cnha3MBkzOQ9OIT1oQ&usqp=CAU" alt="" />

                {basket?.length === 0 ? (
                    <div>
                        <h2> Your shopping basket is empty</h2>
                        <p>
                            you have no items in your basket. To buy one or more items ,click "Add to basket" next to the item.
                        </p>
                    </div>

                ) : (
                    <div>
                        <h2 className="checkout__title">
                            Your shopping basket
                        </h2>

                        {/* list of the all the checkout products */}

                        {basket.map((item) => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>

            
        </div>
    )
}

export default Checkout
