import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query User($userId: Int!) {
    user(id: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;
export const UPDATE_USER_DATA = gql`

mutation Mutation($updateUserId: Int, $input: UserInput) {
  updateUser(id: $updateUserId, input: $input) {
     firstName
      fatherName
      grandfatherName
      familyName
      dependants
    localizedName {
      familyName
      fatherName
      firstName
      grandfatherName
    }
    maritalStatus {
      id
      name
    }
    nationalId {
      expiryDate
      idNumber
    }
  }
}
`;
