import React from 'react';

const Card = ({name, occupation, id}) => {
	return (
		<div className='tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5'> {/*Tachyon*/}
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<h3>{occupation}</h3>
			</div>
		</div>
	);
}

export default Card;