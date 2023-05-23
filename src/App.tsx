import React, { useState } from "react";
import { RatingValueType } from "./components/Rating/Rating";
import { UncontrollRating } from "./components/Rating/UncontrollRating";
import { Accordeon } from "./components/Accordeon/Accordeon";
import { ControlledOnOff } from "./components/OnOff/ControlledOnOff/ControlledOnOff";

function App(props: any) {
  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true);
  const [on, setOn] = useState<boolean>(true);
  return (
    <div className="App">
      {/*      <OnOff></OnOff>
      <OnOff></OnOff>*/}
      <ControlledOnOff
        on={on}
        setOn={() => {
          setOn(!on);
        }}
      ></ControlledOnOff>
      {<div>hey! My state is: {on.toString()}</div>}
      <PageTitle title={"Hello IT-KAMASUTRA"} />
      <Accordeon
        titleValue={"MENU"}
        accordionCollapsed={accordionCollapsed}
        setAccordionCollapsed={setAccordionCollapsed}
      ></Accordeon>

      {/* <Accordeon titleValue={"USERS"} collapsed={false}></Accordeon>*/}

      {/*     <UncollapsedAccordeon titleValue={"MENU"}></UncollapsedAccordeon>

      <UncollapsedAccordeon titleValue={"USERS"}></UncollapsedAccordeon>
*/}
      {/*<Rating value={ratingValue} setRatingValue={setRatingValue} />*/}

      <UncontrollRating></UncontrollRating>
      {/*    <UncontrollRating></UncontrollRating>
      <Rating value={4} />*/}
      {/*      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />*/}
    </div>
  );
}

type PageTitlePropsType = {
  title: string;
};

function PageTitle(props: PageTitlePropsType) {
  return <h1>{props.title}</h1>;
}

export default App;
