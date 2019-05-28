import React from 'react';


const Card = (props) =>{
	const {id, name, username} = props;
	return(
		<div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
		<img src={`https://robohash.org/${props.username}?set=set3`} alt=''/>
			<div>
				<h1>{props.name}</h1>
				<p>{id}</p>
				<p>{username}</p>
			</div>
		</div>
	)
}
export default Card
