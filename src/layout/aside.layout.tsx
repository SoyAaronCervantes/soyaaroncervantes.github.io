import * as React from 'react';
export const AsideLayout = () => {
  return (
    <aside className="[ aside ] [ primary-container ] [ sidebar ]">
      <div className="[ sidebar--item ] [ logo ]"></div>
      <div className="[ sidebar--item ] [ contact ]">
        <a href="" className="contact--link">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">person </span>
        </a>
        <a href="mailto:?subject=Job Opportunity, website viewer" className="contact--link">
          <span className="[ material-symbols material-symbols-outlined ] [ on-background-text ]">email </span>
        </a>
      </div>
      <div className="[ sidebar--item ] [ actions ]">
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
