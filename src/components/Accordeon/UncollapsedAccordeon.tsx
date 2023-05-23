import { useState } from "react";

type AccordeonPropsType = {
  titleValue: string;
};

export function UncollapsedAccordeon(props: AccordeonPropsType) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <AccordeonTitle
        title={props.titleValue}
        setCollapsed={setCollapsed}
        collapsed={collapsed}
      ></AccordeonTitle>
      {collapsed && <div>Было свернуто, пож разверните</div>}
      {!collapsed && <AccordeonBody></AccordeonBody>}
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
  setCollapsed: any;
  collapsed: true | false;
};

function AccordeonTitle(props: AccordeonTitlePropsType) {
  return (
    <div>
      <h1
        onClick={() => {
          props.setCollapsed(!props.collapsed);
        }}
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
