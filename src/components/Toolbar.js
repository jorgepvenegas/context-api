import React from 'react';
import { MyContext } from './../App';

class Toolbar extends React.Component {
	render() {
		return (
			<MyContext.Consumer>
				{context => (
					<React.Fragment>
						<input value={context.newMember} onChange={e => context.updateNewMember(e.target.value)} type="text" />
						<button onClick={context.saveMember}>Add member</button>
					</React.Fragment>
				)}
			</MyContext.Consumer>
		)
	}
}

export default Toolbar;