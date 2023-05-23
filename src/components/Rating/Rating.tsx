import React from "react";

export type RatingValueType = 1 | 2 | 3 | 4 | 5 | 0;

type RatingPropsType = {
  value: RatingValueType;
  setRatingValue: (value: RatingValueType) => void;
};

export function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star
        selected={props.value > 0}
        setRatingValue={props.setRatingValue}
        value={1}
      ></Star>
      <Star
        selected={props.value > 1}
        setRatingValue={props.setRatingValue}
        value={2}
      ></Star>
      <Star
        selected={props.value > 2}
        setRatingValue={props.setRatingValue}
        value={3}
      ></Star>
      <Star
        selected={props.value > 3}
        setRatingValue={props.setRatingValue}
        value={4}
      ></Star>
      <Star
        selected={props.value > 4}
        setRatingValue={props.setRatingValue}
        value={5}
      ></Star>
    </div>
  );
}

type StarPropsType = {
  selected: boolean;
  setRatingValue: (value: RatingValueType) => void;
  value: RatingValueType;
};

function Star(props: StarPropsType) {
  return (
    <span onClick={() => props.setRatingValue(props.value)}>
      {props.selected ? <b>star </b> : "star "}
    </span>
  );
}
