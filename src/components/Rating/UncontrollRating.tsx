import React, { useState } from "react";

type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 };

export function UncontrollRating() {
  const [value, setValue] = useState(0);
  const [selected, setSelected] = useState(false);
  return (
    <div>
      <Star
        selected={value > 0}
        id={1}
        setValue={setValue}
        setSelected={setSelected}
      ></Star>
      <Star
        selected={value > 1}
        id={2}
        setValue={setValue}
        setSelected={setSelected}
      ></Star>
      <Star
        selected={value > 2}
        id={3}
        setValue={setValue}
        setSelected={setSelected}
      ></Star>
      <Star
        selected={value > 3}
        id={4}
        setValue={setValue}
        setSelected={setSelected}
      ></Star>
      <Star
        selected={value > 4}
        id={5}
        setValue={setValue}
        setSelected={setSelected}
      ></Star>
    </div>
  );
}

type StarPropsType = {
  selected: boolean;

  id: number;
  setSelected: any;
  setValue: any;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        props.setSelected(!props.selected);
        props.setValue(props.id);
      }}
    >
      {props.selected ? <b>star </b> : <span>star </span>}
    </span>
  );
}
