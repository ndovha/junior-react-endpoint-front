import React from 'react';
import { graphql, ChildProps } from '@apollo/react-hoc';
import GET_CATEGORY from 'queries/Category';
import { ICategory } from 'types';
import { Wrapper, WrapperCards, Card, Image, Title, Price, BtnCart } from './styles';
import WhiteCart from '../../assets/Images/whiteCart.png';

const withCategory = graphql<{}, ICategory>(GET_CATEGORY);

class AllCategories extends React.Component<ChildProps<{}, ICategory>, {}> {
    render() {
        if (!this.props.data) {
            return;
        }
        const { loading, category, error } = this.props.data;
        if (loading) return <div>loading </div>;
        if (error) return <div>{error} </div>;
        return (
            <Wrapper>
                <h1>Category name</h1>
                <WrapperCards>
                    {
                        category && category.products.map((prod, i) => {
                            return (
                                <Card key={i}>
                                    <Image src={prod.gallery} alt="" />
                                    <BtnCart><img src={WhiteCart} alt="" /></BtnCart>
                                    <Title>{prod.name}</Title>
                                    <Price>{prod.prices.map((sym) => sym.currency.symbol).slice(0, 1)}{prod.prices.map((am) => am.amount.toFixed(2)).slice(0, 1)}</Price>
                                </Card>)
                        })
                    }
                </WrapperCards>
            </Wrapper>
        )
    }
}

export default withCategory(AllCategories);