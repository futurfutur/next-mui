import React, { FunctionComponent } from "react";
import { ApolloError } from "apollo-boost";
interface IProps {
  err: ApolloError;
}

const ErrorMessage: FunctionComponent<IProps> = props => (
  <div>Error: {props.err.message}</div>
);

export default ErrorMessage;
