import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';


function Header() {

    const [{basket}] = useStateValue();
     console.log(basket);

    return <nav className="header">
        <Link to = "/">
            <img className="header__logo" src ="https://pngimg.com/uploads/amazon/amazon_PNG11.png " alt="" />
         
        </Link>


        <div className="header__search">
            <input type="text" className="header__searchInput"></input>     
            <SearchIcon className="header__searchIcon"/>
        </div>

        <div className="header__nav">

            {/* 1st link */}
            <Link to="/login" className="header__link">
                <div className="header__option">
                    <span  className="header_option_lineone">Hello</span>
                    <span className="header_option_linetwo">Sign in</span>
                </div>
            </Link>

            {/* 2nd link  */}

            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header_option_lineone">Returns</span>
                    <span className="header_option_linetwo">& orders</span>
                </div>
            </Link>

            {/* 3rd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header_option_lineone">Your</span>
                    <span className="header_option_linetwo">Prime</span>
                </div>
            </Link>


            {/* 4th link  */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">

                    {/* basket items */}
                        <ShoppingBasketIcon/>

                    {/* basket items number */}
                        <span className="header_option_linetwo header__basketcount" >{basket?.length}</span>

                </div>
            </Link>



        </div>


    </nav>
}

export default Header
