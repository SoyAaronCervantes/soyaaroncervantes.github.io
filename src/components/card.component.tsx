// @flow
import * as React from 'react';
import {Hobbies} from "../interfaces/hobbies.interfaces";

type Props = {
  hobby: Hobbies;
  index: number
};

export function CardComponent({ hobby, index }: Props) {
  return (
    <div
      key={index.toString()}
      className={
        "[ card ]" +
        " [ grid--row--" + hobby.size.row + " ] " +
        " [ grid--column--" + hobby.size.col + " ] "
      }>
      <img
        src={ hobby.imgSrc }
        alt=""
        className="[ card--image ]"
        loading="lazy"/>
      <div className="[ card--body ]">
        <div className="[ card--location ]">
              <span
                className="
              [ material-symbols material-symbols-outlined ]
              [ card--location-icon ]">
              location_on
            </span>
          <p className="[ card--location-name ] [ body-medium ]">
            { hobby.place }
          </p>
        </div>
        <div className="[ card--date ]">
          <p
            className="
              [ material-symbols material-symbols-outlined ]
              [ card--location-icon ]">
            event
          </p>
          <p className="[ card--location-name ] [ body-medium ]">
            { hobby.year }
          </p>
        </div>
      </div>
    </div>
  );
};
