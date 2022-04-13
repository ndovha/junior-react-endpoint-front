import React from 'react';
import Header from 'components/Header/Header.component';

export class BaseLayout extends React.Component {
    render() {
        return (
            <div>
                <Header />
            </div>
        )
    }

}