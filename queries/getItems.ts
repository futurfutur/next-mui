import gql from "graphql-tag";

const GET_ITEMS = gql`
  query {
    items {
      id
      name
      sku
      number
      cell
      celltype
      stocktype
      status
      shipment
      shipmentorder
      daysinstock
      bestbefore
      lastcheck
      checkstatus
      doclink
      lastaction
    }

    fields {
      id
      name
      type
      datakey
    }
  }
`;

export default GET_ITEMS;
