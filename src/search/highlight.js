import React from 'react';
import PropTypes from 'prop-types';

const escapeRegExp = (str = '') => str.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');

/* Hightlight component take search & children */
const Highlight = ({ search, children }) => {
  const patt = new RegExp(`(${escapeRegExp(search)})`, 'i');
  const parts = String(children).split(patt);

  if (search) {
    return parts.map((part, index) =>
      patt.test(part) ? (
        <mark className="highlight-text" key={index}>
          {part}
        </mark>
      ) : (
        part
      ),
    );
  } else {
    return children;
  }
};

Highlight.defaultProps = {
  search: '',
  children: '',
};

Highlight.propTypes = {
  search: PropTypes.string,
  children: PropTypes.string,
};

export default Highlight;
