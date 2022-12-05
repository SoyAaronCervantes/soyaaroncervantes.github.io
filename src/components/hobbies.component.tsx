import * as React from 'react';
import {Hobbies} from "../interfaces/hobbies.interfaces";

export function HobbiesComponent() {

  const hobbies: Hobbies[] = [
    {
      imgSrc: 'img/grid/img-3.jpg',
      year: 2021,
      place: 'Xcaret',
      size: {
        col: 1,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-28.jpg',
      year: 2019,
      place: 'YN Dinner',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-16.jpg',
      year: 2022,
      place: 'Pizza place',
      size: {
        col: 2,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-8.jpg',
      year: 2021,
      place: 'Friends Wedding',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-23.jpg',
      year: 2022,
      place: 'Guanajuato',
      size: {
        col: 1,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-1.jpg',
      year: 2021,
      place: 'Yuyu club',
      size: {
        col:2,
        row:1
      }
    },
    {
      imgSrc: 'img/grid/img-2.jpg',
      year: 2021,
      place: 'Ciento39 club',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-4.jpg',
      year: 2021,
      place: 'Tulum',
      size: {
        col: 1,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-5.jpg',
      year: 2021,
      place: 'Fantasy Lab',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-6.jpg',
      year: 2021,
      place: 'Yuyu club',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-24.jpg',
      year: 2022,
      place: 'Sneakers',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-25.jpg',
      year: 2022,
      place: 'La Cotorrisa',
      size: {
        col: 1,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-26.jpg',
      year: 2022,
      place: 'Mr Taco',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-27.jpg',
      year: 2019,
      place: 'YN First day',
      size: {
        col: 2,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-12.jpg',
      year: 1999,
      place: 'Home',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-13.jpg',
      year: 2019,
      place: 'Art Gallery',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-14.jpg',
      year: 2021,
      place: 'Fantasy Lab',
      size: {
        col: 1,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-15.jpg',
      year: 2022,
      place: 'Home',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-17.jpg',
      year: 2022,
      place: 'Foro Sol',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-18.jpg',
      year: 2022,
      place: 'Foro Sol',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-7.jpg',
      year: 2021,
      place: 'Puerto Vallarta',
      size: {
        col: 2,
        row: 2
      }
    },
    {
      imgSrc: 'img/grid/img-9.jpg',
      year: 2018,
      place: 'Tattoo design',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-10.jpg',
      year: 2021,
      place: 'YN Retreat',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-11.jpg',
      year: 2022,
      place: 'Mr. Taco',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-19.jpg',
      year: 2022,
      place: 'YN Retreat',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-20.jpg',
      year: 2022,
      place: 'Guanajuato vineyard',
      size: {
        col: 1,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-22.jpg',
      year: 2022,
      place: 'Guanajuato',
      size: {
        col: 2,
        row: 1
      }
    },
    {
      imgSrc: 'img/grid/img-29.jpg',
      year: 2020,
      place: 'Noodler',
      size: {
        col: 1,
        row: 1
      }
    }
  ];

  return (
    <section className="[ hobbies ]">
      <h2 className="[ display-medium ]">Adventures, hobbies & friends</h2>
      <div className="[ hobbies--grid ]">
        { hobbies.map( (value, index) => {
          return (
            <div
              key={index.toString()}
              className={
                "[ card ]" +
                " [ grid--row--" + value.size.row + " ] " +
                " [ grid--column--" + value.size.col + " ] "
              }>
              <img
                src={ value.imgSrc }
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
                  <p className="[ card--location-name ]">
                    { value.place }
                  </p>
                </div>
                <div className="[ card--date ]">
                  <p
                    className="
              [ material-symbols material-symbols-outlined ]
              [ card--location-icon ]">
                    event
                  </p>
                  <small className="[ card--location-name ]">
                    { value.year }
                  </small>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
