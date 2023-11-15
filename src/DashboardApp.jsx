import React, { useState } from 'react';
import Img1 from '../src/images/img1.jpg';
import Img2 from '../src/images/img2.jpg';
import Img3 from '../src/images/img3.jpg';
import Img4 from '../src/images/img4.jpg';
import Img5 from '../src/images/img5.jpg';
import Img6 from '../src/images/img6.jpg';
import Img7 from '../src/images/img7.jpg';
import Img8 from '../src/images/img8.jpg';
import Img9 from '../src/images/img9.jpg';
import User from '../src/images/user.jpg';


export const DashboardApp = () => {

    const buttons = [
        {
            id: '1',
            name: 'Dashboard',
            icon: 'home-outline'
        },
        {
            id: '2',
            name: 'Customers',
            icon: 'people-outline'
        },
        {
            id: '3',
            name: 'Message',
            icon: 'chatbubble-outline'
        },
        {
            id: '4',
            name: 'Help',
            icon: 'help-outline'
        },
        {
            id: '5',
            name: 'Settings',
            icon: 'settings-outline'
        },
        {
            id: '6',
            name: 'Password',
            icon: 'lock-closed-outline'
        },
        {
            id: '7',
            name: 'Sign Out',
            icon: 'log-out-outline'
        }
    ]


    const [ toggle, setToggle ] = useState(false);
    const [ select, setSelect ] = useState([]);
    const [style, setStyle] = useState('')

    const onShowMenu = () => {
        const show = !toggle;
        setToggle( show );
    }

    const onSelected = ( id ) => {
        const searchSelected = buttons.find( button => button.id === id );
        setSelect( searchSelected );
        setStyle( id );

    }


  return (
    <div className="container">

        {/* Navbar */}

        <div className={ `navigation ${ toggle ? 'active' : '' }` }>
            <ul>
                <li>
                    <a href="#">
                        <span className='icon'><ion-icon name='logo-apple'></ion-icon></span>
                        <span className='title'>Brand Name</span>
                    </a>
                </li>

                {
                    buttons.map( ({ id, name, icon }) => (
                        <li 
                            key={ id }
                            className={ `${ style === id ? 'hover-active' : '' }` }
                            onMouseOver={ () => onSelected(id) }
                            
                        >
                            <a href="#">
                                <span className='icon'><ion-icon name={ icon } ></ion-icon></span>
                                <span className='title'> { name } </span>
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>

        {/* Main */}

        <div className={`main ${ toggle ? 'active' : '' }`}>
            <div className="topbar">
                <div className="toggle" onClick={ onShowMenu }>
                    <ion-icon name='menu-outline'></ion-icon>
                </div>
                {/* search */}
                <div className="search">
                    <label>
                        <input type="text" placeholder='Search Hero' />
                        <ion-icon name='search-outline'></ion-icon>
                    </label>
                </div>
                {/* userImg */}
                <div className="user">
                    <img src={ User } alt="user" />
                </div>
            </div>

                {/* Cards */}
            
            <div className="cardBox">
                <div className="card">
                    <div>
                        <div className="numbers">1,504</div>
                        <div className="cardName">Dolly Views</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name='eye-outline'></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">80</div>
                        <div className="cardName">Sales</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name='cart-outline'></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">204</div>
                        <div className="cardName">Comemnts</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name='chatbubbles-outline'></ion-icon>
                    </div>
                </div>

                <div className="card">
                    <div>
                        <div className="numbers">$7,842</div>
                        <div className="cardName">Earnings</div>
                    </div>
                    <div className="iconBx">
                        <ion-icon name='cash-outline'></ion-icon>
                    </div>
                </div>
            </div>

                {/* Details list */}

            <div className="details">
                <div className="recentOrders">
                    <div className="cardHeader">
                        <h2>Recent Orders</h2>
                        <a href="#" className='btn'>View All</a>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Payment</td>
                                <td>Status</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Star Refrigerator</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Window Coolers</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Speakers</td>
                                <td>$620</td>
                                <td>Paid</td>
                                <td><span className='status return'>Return</span></td>
                            </tr>
                            <tr>
                                <td>Hp Laptop</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status inProgress'>In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Apple Watch</td>
                                <td>$1200</td>
                                <td>Paid</td>
                                <td><span className='status delivered'>Delivered</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Adidas Shoes</td>
                                <td>$620</td>
                                <td>Due</td>
                                <td><span className='status inProgress'>In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Denim Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status inProgress'>In Progress</span></td>
                            </tr>
                            <tr>
                                <td>Casual Shoes</td>
                                <td>$575</td>
                                <td>Paid</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Wall Fan</td>
                                <td>$110</td>
                                <td>Paid</td>
                                <td><span className='status pending'>Pending</span></td>
                            </tr>
                            <tr>
                                <td>Dening Shirts</td>
                                <td>$110</td>
                                <td>Due</td>
                                <td><span className='status inProgress'>In Progress</span></td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* New Customers */}

                <div className="recentCustomers">
                    <div className="cardHeader">
                        <h2>Recent Customers</h2>
                    </div>
                    <table>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img1 } alt="img1"/></div> </td>
                            <td><h4>Abbed <br /> <span>Dubai</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img2 } alt="img1"/></div> </td>
                            <td><h4>Hursell <br /> <span>Germany</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img3 } alt="img1"/></div> </td>
                            <td><h4>Vidal <br /> <span>Venezuela</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img4 } alt="img1"/></div> </td>
                            <td><h4>Bret <br /> <span>France</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img5 } alt="img1"/></div> </td>
                            <td><h4>Huna <br /> <span>USA</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img6 } alt="img1"/></div> </td>
                            <td><h4>David <br /> <span>Japan</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img7 } alt="img1"/></div> </td>
                            <td><h4>Delc <br /> <span>Italy</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img8 } alt="img1"/></div> </td>
                            <td><h4>Alef <br /> <span>Malaysia</span></h4></td>
                        </tr>
                        <tr>
                            <td width='60px' > <div className="img8x"><img src={ Img9 } alt="img1"/></div> </td>
                            <td><h4>Amit <br /> <span>India</span></h4></td>
                        </tr>
                    </table>
                </div>

            </div>

        </div>
    </div>
  )
}

