import React, {useState} from "react";

/*type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 };*/

export function UncontrollRating() {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Star selected={value > 0} setValue={() => setValue(1)}></Star>
      <Star selected={value > 1} setValue={() => setValue(2)}></Star>
      <Star selected={value > 2} setValue={() => setValue(3)}></Star>
      <Star selected={value > 3} setValue={() => setValue(4)}></Star>
      <Star selected={value > 4} setValue={() => setValue(5)}></Star>
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  setValue: () => void;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        /* props.setSelected(!props.selected);*/
        props.setValue();
      }}
    >
      {props.selected ? <b>star </b> : <span>star </span>}
    </span>
  );
}

/*
import React, {useState} from "react";

/!*type RatingPropsType = { value: 1 | 2 | 3 | 4 | 5 | 0 };*!/
type RatingPropsType = 1 | 2 | 3 | 4 | 5 | 0;

export function UncontrollRating() {
  const [value, setValue] = useState<number>(0);

  return (
    <div>
      <Star selected={value > 0} id={1} setValue={setValue}></Star>
      <Star selected={value > 1} id={2} setValue={setValue}></Star>
      <Star selected={value > 2} id={3} setValue={setValue}></Star>
      <Star selected={value > 3} id={4} setValue={setValue}></Star>
      <Star selected={value > 4} id={5} setValue={setValue}></Star>
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  id: RatingPropsType;
  setValue: (id: RatingPropsType) => void;
};

function Star(props: StarPropsType) {
  return (
    <span
      onClick={() => {
        /!* props.setSelected(!props.selected);*!/
        props.setValue(props.id);
      }}
    >
      {props.selected ? <b>star </b> : <span>star </span>}
    </span>
  );
}
*/
