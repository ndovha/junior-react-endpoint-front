import React from 'react';
import { BaseLayout } from 'components/BaseLayout';
import AllCategories from 'components/AllCategories/AllCategories.component';

export default class Home extends React.Component {
    render() {
        return (
            <>
                <BaseLayout />
                <AllCategories />
            </>
        )
    }
}
