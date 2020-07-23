import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps{}

const HelloWorld : React.FC<Props> = () => { 
    return (
        <div>
            Hello, World!
        </div>
    );
}

export default HelloWorld;
