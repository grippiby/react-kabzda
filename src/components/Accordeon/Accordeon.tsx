type AccordeonPropsType = {
	titleValue: string
	collapsed: boolean
}

export function Accordeon(props: AccordeonPropsType) {
	/* if (props.collapsed) {
		return (
			<>
				<AccordeonTitle title={props.titleValue}></AccordeonTitle>
				<div>Было свернуто, пож разверните</div>
			</>
		)
	} */
	return (
		<>
			<AccordeonTitle title={props.titleValue}></AccordeonTitle>
			{props.collapsed && <div>Было свернуто, пож разверните</div>}
			{!props.collapsed && <AccordeonBody></AccordeonBody>}
		</>
	)
}

/* export function Accordeon(props: AccordeonPropsType) {
	if (props.collapsed) {
		return (
			<>
				<AccordeonTitle title={props.titleValue}></AccordeonTitle>
				<div>Было свернуто, пож разверните</div>
			</>
		)
	}
	return (
		<>
			<AccordeonTitle title={props.titleValue}></AccordeonTitle>
			<AccordeonBody></AccordeonBody>
		</>
	)
} */

type AccordeonTitlePropsType = { title: string }
function AccordeonTitle(props: AccordeonTitlePropsType) {
	return (
		<div>
			<h1>{props.title}</h1>
		</div>
	)
}
function AccordeonBody() {
	return (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	)
}
/* export default Accordeon */
