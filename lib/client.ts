import ApolloClient from "apollo-boost";

const SERVER_URL = "http://localhost";
const SERVER_PORT = "3001";


const createClient = () =>
  new ApolloClient({
    uri: `${SERVER_URL}:${SERVER_PORT}`
  });

export default createClient;
