import React, { Component } from 'react';

export class Portfolio extends Component {

    render() {
        return (
            <div className="w-full h-full relative flex flex-col text-white select-none">
                <iframe width="100%" height="100%" src="https://harukamiyagi-intro.vercel.app/" title="haruka miyagi"></iframe>
            </div>
        )
    }
}

export default Portfolio;

export const displayPortfolio = () => {
    return <Portfolio> </Portfolio>;
}
