import "./styles.css";
import * as React from "react";
import { APP_ID } from "./index";
import { useQuery} from "@apollo/client";
import { FIND_CUSTOMER} from "./graphql-operations";

export default function App(props) {
  const [searchText, setSearchText] = React.useState("Arun");
  const { loading, data } = useQuery(FIND_CUSTOMER, {
    variables: { query: { firstName: searchText } }
  });

  const customer = data ? data.customer : null;
  

  return (
    <div className="App">
      <h1>Find a Customer</h1>
      <span className="subheading">
        The app automatically searches as you type
      </span>
      <div className="title-input">
        <input
          className="fancy-input"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          type="text"
        />
      </div>
      {APP_ID === "<Your App ID>" ? (
        <div className="status important">
          Replace APP_ID with your App ID in index.js
        </div>
      ) : (
        !loading &&
        !customer && <div className="status">No Customer with that name!</div>
      )}
      {customer && (
        <div>
          <h2>{customer.firstName}</h2>
          <div>LastName: {customer.lastName}</div>
          <div>Email: {customer.email} </div>
          <div>Property-1: {customer.properties[0].propCity}</div>
          <div>Property-2: {customer.properties[1].propCity}</div>
          <br />
          <img alt={`Poster for ${customer.firstName}`} src={customer.photoUrl} />
        </div>
      )}
    </div>
  );
}
