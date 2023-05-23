type AccordeonPropsType = {
  titleValue: string;
  accordionCollapsed: boolean;
  setAccordionCollapsed: (e: boolean) => void;
};

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
      <AccordeonTitle
        accordionCollapsed={props.accordionCollapsed}
        title={props.titleValue}
        setAccordionCollapsed={props.setAccordionCollapsed}
      ></AccordeonTitle>
      {props.accordionCollapsed && <div>Было свернуто, пож разверните</div>}
      {!props.accordionCollapsed && <AccordeonBody></AccordeonBody>}
    </>
  );
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

type AccordeonTitlePropsType = {
  title: string;
  setAccordionCollapsed: (e: boolean) => void;
  accordionCollapsed: boolean;
};

function AccordeonTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h1
        onClick={() => props.setAccordionCollapsed(!props.accordionCollapsed)}
      >
        {props.title}
      </h1>
    </div>
  );
}

function AccordeonBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

/* export default Accordeon */
