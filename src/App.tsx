import React from "react";
import { OnOff } from "./components/OnOff/OnOff";
import { Rating } from "./components/Rating/Rating";
import { UncollapsedAccordeon } from "./components/Accordeon/UncollapsedAccordeon";
import { UncontrollRating } from "./components/Rating/UncontrollRating";

function App(props: any) {
  return (
    <div className="App">
      <OnOff></OnOff>
      <OnOff></OnOff>
      <PageTitle title={"Hello IT-KAMASUTRA"} />
      <Rating value={3} />
      {/*   <Accordeon titleValue={"MENU"} collapsed={true}></Accordeon>
      <Accordeon titleValue={"USERS"} collapsed={false}></Accordeon>*/}
      <UncollapsedAccordeon titleValue={"MENU"}></UncollapsedAccordeon>
      <UncollapsedAccordeon titleValue={"USERS"}></UncollapsedAccordeon>

      <UncontrollRating></UncontrollRating>
      <UncontrollRating></UncontrollRating>
      <Rating value={4} />
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
