'use client';

import './loader.scss';

export function Loader() {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="sleep"></span>
      </div>
    </div>
  );
}