import * as React from 'react';

export function ProfileComponent() {
  return (
    <section className="[ profile ] [ section ] [ flex-content ]">
      <div className="[ user ] [ rounded-5 ]">
        <img src="img/profile.jpg" alt="Profile Image" className="[ user--imagen ]" />
          <div className="[ user--data ] [ align-items-center ] [ text-center ] [ secondary-container ]">
            <div className="[ user--personal ]">
              <h3 className="[ user--nombre ] [ headline-large ]">
                Aarón Cervantes
              </h3>
              <p className="[ user--title ] [ title-medium ]">
                Senior Frontend Engineer
              </p>
            </div>
            <div className="[ user--social ] [ d-flex gap-4 ]">
              <a
                target="_blank"
                href="https://www.instagram.com/soyaaroncervantes/"
                className="[ instagram--logo ] [ user--social--item ]"
                aria-label="Instagram profile">
                <img
                  src="img/instagram--logo.svg"
                  alt=""
                  className="[ user--social--image ]"/>
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/soyaaroncervantes/"
                className="[ linkedin ] [ user--social--item ]"
                aria-label="LinkedIn profile">
                <img
                  src="img/linkedin--logo.svg"
                  alt=""
                  className="[ user--social--image ]"/>
              </a>
              <a
                target="_blank"
                href="https://www.github.com/soyaaroncervantes/"
                className="[ github ] [ user--social--item ]"
                aria-label="Github profile">
                <img
                  src="img/github--logo.svg"
                  alt=""
                  className="[ user--social--image ]" />
              </a>
            </div>
          </div>
      </div>
      <div className="[ story ] [ flex-content ]">
        <section className="[ flex-content ] [ story--me ] ">
          <h1 className="[ story--title ] [ display-small ]">
            About me
          </h1>
          <p className="[ story--paragraph ] [ body-large ]">
            I'm a Frontend Engineer that always wants to share his knowledge with everyone.
          </p>
          <p className="[ story--paragraph ] [ body-large ]">
            One of my biggest challenges has been optimizing a monorepo project. It had 2 libraries dependencies and it
            weighted 5Mb.
            Now, the project works with 5 reusable libraries, 3 pattern design, and it weighs 90% less than before.
          </p>
          <p className="[ story--paragraph ] [ body-large ]">
            For me, the best way to learn new things it’s helping to other ones to learn what you already know.
            My biggest dream is to take a class from one of my students and he/she teaches me something new.
          </p>
        </section>
        <section className="[ flex-content ] [ story--knowledge ] ">
          <h1 className="[ story--title ] [ display-small ]">
            Knowledge
          </h1>
          <p className="[ story--paragraph ] [ body-large ]">
            I think I’m huge fan of 3 pattern design; Facade, Mediator and Strategy patterns.
            I see that It’s a pattern that it repeats everytime I work in a web application.
          </p>
          <p className="[ story--paragraph ] [ body-large ]">
            I understand pretty well how Angular works, but I can use any Frontend framework.
            In general, all the frameworks are similar at this point, they just change the syntax.
          </p>
          <p className="[ story--paragraph ] [ body-large ]">
            And I love to use Typescript. I think it’s a great language to work with.
          </p>
        </section>
      </div>
    </section>
  );
};
