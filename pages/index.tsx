import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";

class Index extends React.Component {
  static getInitialProps({ reduxStore, req }) {
    const isServer = !!req;

    return {};
  }

  componentDidMount() { }

  componentWillUnmount() { }

  render() {
    return <div><Button
      onClick={() => {

      }}
      variant="contained"
      color="primary"
      autoFocus
    >
      test
  </Button></div>;
  }
}

export default connect()(Index);
