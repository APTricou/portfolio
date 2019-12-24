import React from 'react';

export default function PageFooter() {
  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design: <a href="http://html5up.net">HTML5 UP</a>
        </li>
        <li>
          This page created using{' '}
          <a href="https://www.gatsbyjs.org/">
            <strong>GatsbyJS</strong>
          </a>
        </li>
      </ul>
    </div>
  );
}
