import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className="footer">
        <p className="footer__copyright">&copy;&nbsp;2020 Mesto Russia</p>
      </footer>
    );
  }
}