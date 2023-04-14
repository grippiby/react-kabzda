import React from 'react'
type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 }
export function Rating(props: RatingPropsType) {
	if (props.value === 1) {
		return (
			<div>
				<Star selected={true}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
			</div>
		)
	}
	if (props.value === 2) {
		return (
			<div>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
			</div>
		)
	}
	if (props.value === 3) {
		return (
			<div>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={false}></Star>
				<Star selected={false}></Star>
			</div>
		)
	}
	if (props.value === 4) {
		return (
			<div>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={false}></Star>
			</div>
		)
	}
	if (props.value === 5) {
		return (
			<div>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
				<Star selected={true}></Star>
			</div>
		)
	}

	return (
		<div>
			<Star selected={false}></Star>
			<Star selected={false}></Star>
			<Star selected={false}></Star>
			<Star selected={false}></Star>
			<Star selected={false}></Star>
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
