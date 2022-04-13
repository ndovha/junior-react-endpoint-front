import React from 'react';
import { graphql, ChildProps } from '@apollo/react-hoc';
import GET_CATEGORY from 'queries/Category';
import { ICategory } from 'types';

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
            <div>
                <h1>Category name</h1>
                <div>
                    {
                        category && category.products.map((prod, i) => {
                            return (
                                <div key={i}>
                                    <img src={prod.gallery} alt="" />
                                    <p>{prod.name}</p>
                                    <p>{prod.prices.map((sym) => sym.currency.symbol).slice(0, 1)}{prod.prices.map((am) => am.amount.toFixed(2)).slice(0, 1)}</p>
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withCategory(AllCategories);