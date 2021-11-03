import gql from "graphql-tag";

export const FIND_CUSTOMER = gql`
  query FindCustomer($query: CustomerQueryInput!) {
    customer(query: $query) {
      _id
		address
		city
		createdAt
		createdBy
		email
    photoUrl
		firstName
		lastName
		mobile
		modifiedAt
		modifiedBy
    properties {
      property_id
      propCity
      propAddress
    }
    }
  }
`;
