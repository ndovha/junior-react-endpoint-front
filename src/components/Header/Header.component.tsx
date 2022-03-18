import React from 'react';
import Logo from '../../assets/Images/logo.png';
import Cart from '../../assets/Images/cart.png';
import { WrapperHeader, HeaderLinks, Links, UrlLink, WrapperCart } from './styles';

export class Header extends React.Component {
    render() {
        return (
            <WrapperHeader>
                <HeaderLinks>
                    <ul>
                        <Links>
                            <UrlLink to=''>Women</UrlLink>
                        </Links>
                    </ul>
                    <ul>
                        <Links>
                            <UrlLink to=''>Men</UrlLink>
                        </Links>
                    </ul>
                    <ul>
                        <Links>
                            <UrlLink to=''>Kids</UrlLink>
                        </Links>
                    </ul>
                </HeaderLinks>
                <div>
                    <img src={Logo} alt='logo' />
                </div>
                <WrapperCart>
                    <div>
                        <select>
                            <option selected disabled hidden>$</option>
                            <option>$ USD</option>
                            <option>€ EUR</option>
                            <option>¥ JPY</option>
                        </select>
                    </div>
                    <div>
                        <img src={Cart} />
                    </div>
                </WrapperCart>
            </WrapperHeader>
        )
    }

}