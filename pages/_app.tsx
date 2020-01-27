import React from "react";
import App from "next/app";
import Head from "next/head";
import { withApollo } from "../lib/apollo";
import withReduxStore from "../lib/with-redux-store";
import { Provider, useDispatch } from "react-redux";
import { compose } from "redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import { connect } from "react-redux";
import dynamic from "next/dynamic";

import ContentPage from '../modules/portal/ContentPage';

// const ContentPage = dynamic(
//   () => import("../modules/portal/ContentPage"),
//   { ssr: false }
// );


const theme = createMuiTheme({
  palette: {
    primary: red,
    secondary: {
      main: "#f44336"
    }
  }
});

interface IProps {
  reduxStore: any;
}

class NextApp extends App<IProps> {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <ThemeProvider theme={theme}>
          <ContentPage>
            <Head>
              <title>test</title>
              <link
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </ContentPage>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withReduxStore(NextApp);
