import * as React from 'react';
export const AsideLayout = () => {
  return (
    <aside className="[ aside ] [ primary-container ]">
      <div className="[ aside--item ] [ logo ]"></div>
      <div className="[ aside--item ] [ contact ]">
        <a href="" className="contact--link">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">person </span>
        </a>
        <a href="mailto:soyaaroncervantes@gmail.com?subject=Job Opportunity, website viewer" className="contact--link">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">email </span>
        </a>
      </div>
      <div className="[ aside--item ] [ actions ]">
        <a href="https://">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">share </span>
        </a>
        <a href="https://">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">download </span>
        </a>
      </div>
    </aside>
  );
};
