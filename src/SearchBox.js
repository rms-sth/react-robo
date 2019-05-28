import React from 'react';

const SearhBox = ({searchfield, searchChange}) => {
	return(
		<div className="pa2">
			<input className="pa3 ba b--blue bg-lightest-blue" type="search" placeholder="Type to filter robot friends..." onChange={searchChange}/>
		</div>
	)
}

export default SearhBox;