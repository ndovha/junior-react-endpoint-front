import React from 'react';
import Logo from '../../assets/Images/logo.png';
import EmptyCart from '../../assets/Images/emptyCart.png';
import { graphql, ChildProps } from '@apollo/react-hoc';
import { WrapperHeader, HeaderLinks, Links, UrlLink, WrapperCart } from './styles';
import { IData } from 'types';
import GET_CURRENCY from 'queries/Currency';

const withCurrency = graphql<{}, IData>(GET_CURRENCY);

class Header extends React.Component<ChildProps<{}, IData>, {}> {

    render() {
        if (!this.props.data) {
            return;
        }
        const { loading, currencies, error } = this.props.data;

        if (loading) return <div>loading </div>;
        if (error) return <div>{error} </div>;

        return (
            <WrapperHeader>
                <HeaderLinks>
                    <ul>
                        <Links>
                            <UrlLink to=''>All</UrlLink>
                        </Links>
                    </ul>
                    <ul>
                        <Links>
                            <UrlLink to=''>Clothes</UrlLink>
                        </Links>
                    </ul>
                    <ul>
                        <Links>
                            <UrlLink to=''>Tech</UrlLink>
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
                            {
                                currencies && currencies.map((currency, i) => {
                                    return <option key={i}>{currency.symbol} {currency.label}</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <img src={EmptyCart} alt='cart' />
                    </div>
                </WrapperCart>
            </WrapperHeader>
        )
    }

}

export default withCurrency(Header);