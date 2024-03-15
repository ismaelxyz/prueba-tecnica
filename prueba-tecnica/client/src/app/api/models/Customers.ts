import { Key } from "react";

export default interface Customer {
  key: Key;
  id: String;
  firstName: String;
  lastName: String;
  company: String;
  city: String;
  country: String;
  firstPhone: String;
  secondePhone: String;
  email: String;
  subscriptionDate: String;
  website: String;
}
