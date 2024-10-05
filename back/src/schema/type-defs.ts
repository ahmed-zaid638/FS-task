// src/schema/type-defs.ts
const { gql } = require("apollo-server");

const typeDefs = gql`
  #  types
  type LocalizedName {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  type NationalId {
    idNumber: String
    expiryDate: String
  }

  type Country {
    id: String
    name: String
  }

  type Nationality {
    country: Country
    countryId: Int
  }

  type User {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedName
    nationalId: NationalId
    nationalities: [Nationality]
    maritalStatus: MaritalStatus
    dependants: Int
  }
  type MaritalStatus {
    id: String
    name: String
  }
  #  Inputs
  input MaritalStatusInput {
    id: String
    name: String
  }
  input LocalizedNameInput {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
  }

  input NationalityInput {
    country: CountryInput
    countryId: Int
  }

  input CountryInput {
    id: String
    name: String
  }
  input NationalIdInput {
    idNumber: String
    expiryDate: String
  }
  # Query
  type Query {
    user(id: Int): User
  }
  input UserInput {
    firstName: String
    fatherName: String
    grandfatherName: String
    familyName: String
    localizedName: LocalizedNameInput
    nationalId: NationalIdInput
    maritalStatus: MaritalStatusInput
    dependants: Int
  }
  # Mutation
  type Mutation {
    updateUser(id: Int, input: UserInput): User
  }
`;

module.exports = { typeDefs };
