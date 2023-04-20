import React from 'react'
type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 }
export function Rating(props: RatingPropsType) {
	return (
		<div>
			<Star selected={props.value > 0}></Star>
			<Star selected={props.value > 1}></Star>
			<Star selected={props.value > 2}></Star>
			<Star selected={props.value > 3}></Star>
			<Star selected={props.value > 4}></Star>
		</div>
	)
}
type StarPropsType = { selected: boolean }
function Star(props: StarPropsType) {
	if (props.selected) {
		return (
			<span>
				<b>star </b>
			</span>
		)
	}
	return (
		<>
			<span>star </span>
		</>
	)
}
