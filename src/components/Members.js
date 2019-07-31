import React from 'react';
import { MyContext } from './../App';

class Members extends React.Component {
	render() {
		return (
			<div>
				<MyContext.Consumer>
					{context => (
						<React.Fragment>
							<h2>{context.newMember}</h2>
							<p>We have {context.members.length} members</p>
							<ul>
								{context.members.map((m, i) => <li key={i}>{m}</li>)}
							</ul>
						</React.Fragment>
					)}
				</MyContext.Consumer>
			</div>
		)
	}
}

export default Members;