import React from 'react';

const Reserve = () => {
	const handleSubmit = () => {
		console.log(submit);
	}
	return (
	  <>
			<div>Reserve a car</div>

			<form onSubmit={handleSubmit}>
				<label htmlFor="pick_up_date">
					<input type="date" name="pick_up_date" onChange={(e) => setPickDate(e.target.value)} />
				</label>

				<label htmlFor="drop_off_date">
					<input type="date" name="drop_off_date" onChange= {(e) => setDropDate(e.target.value)} />
				</label>

				<label htmlFor="pick_up_city">
					<input type="text" name="pick_up_city" placeholder="pick up city" onChange={(e)=> setPickCity(e.target.value)} />
				</label>

				<label htmlFor="return_city">
					<input type="text" name="return_city" placeholder="drop off city" onChange={(e)=> setDropCity(e.target.value)} />
				</label>

				<button type="submit">Submit</button>
			</form>
	  </>
	)
}

export default Reserve;
