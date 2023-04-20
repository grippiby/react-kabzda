import styles from './OnOff.module.css'

type OnOffPropsType = {
	state: boolean
}

export function OnOff(props: OnOffPropsType) {
	let color = null
	const red = styles.off
	const green = styles.on
	props.state ? (color = red) : (color = green)
	return (
		<div className={styles.root}>
			{props.state && (
				<>
					<div className={color}>On</div> <div>Off</div>
				</>
			)}
			{!props.state && (
				<>
					<div>On</div> <div className={color}>Off</div>
				</>
			)}
			<div className={`${styles.circle} ${color}`}></div>
		</div>
	)
}

/* import styles from './OnOff.module.css'

type OnOffPropsType = {
	state: boolean
}

export function OnOff(props: OnOffPropsType) {
	return (
		<div className={styles.root}>
			{props.state && (
				<>
					<div className={styles.on}>On</div> <div>Off</div>
					<div className={`${styles.circle} ${styles.on}`}></div>
				</>
			)}
			{!props.state && (
				<>
					<div>On</div> <div className={styles.off}>Off</div>
					<div className={`${styles.circle} ${styles.off}`}></div>
				</>
			)}
		</div>
	)
}
 */
