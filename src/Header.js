import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";


function Header() {
    return (
        <div className='header'>
            <img 
            className="header_logo" 
            src= "https://5milecavemovie.com/wp-content/uploads/2019/05/white-amazon-logo-white.png" />
        
        <div className="header_search">
            <input className="header_searchInput" type="text"/>
            <SearchIcon className="header_searchIcon"/>
            {/*logo*/}
        </div>

        <div className="header_nav">
            <div className='header_option'>
                <span
                    className='header_optionLineOne'> Hello Laura!
                </span>

                <span
                    className='header_optionLineTwo'> Sign In
                </span>


            </div>

            <div className='header_option'>
            <span
                    className='header_optionLineOne'> Returns
                </span>

                <span
                    className='header_optionLineTwo'> & Orders
                </span>                

            </div>


            <div className='header_option'>
            <span
                    className='header_optionLineOne'> Your
                </span>

                <span
                    className='header_optionLineTwo'> Prime
                </span>               

            </div>
                
            <div className='header_option'>
           

            </div>



            
        </div>
        
    </div>
    )
}

export default Header
