import React from 'react';
import { MyContext } from './../App';

class Members extends React.Component {
    render() {
        return (
            <div>
                <MyContext.Consumer>
                    { context => (
                        <React.Fragment>
                            <p>We have {context.members.length} members</p>
                            <ul>
                                {context.members.map( m => <li>{m}</li> )}
                            </ul>
                        </React.Fragment>
                    )}
                </MyContext.Consumer>
            </div>
        )
    }
}

export default Members;