import { useState, useEffect } from "react";
import Card from "../../common/Card";
import useUserData from "../../../hooks/useUserData";
import InfoField from "./InfoField";

interface Nationality {
  name: string;
  id: string;
}

interface LocalizedName {
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
}

interface NationalId {
  idNumber: string;
  expiryDate: string;
}

interface MaritalStatus {
  id: number;
  name: string;
}

interface Passport {
  no: string;
  expiryDate: string;
  issueDate: string;
}

interface UserData {
  title: string;
  firstName: string;
  fatherName: string;
  grandfatherName: string;
  familyName: string;
  lFirstName: string;
  lFatherName: string;
  lGrandfatherName: string;
  lFamilyName: string;
  nationalities: Nationality;
  localizedName: LocalizedName;
  nationalId: NationalId;
  maritalStatus: MaritalStatus;
  dependants: string;
  dateOfBirth: string;
  gender: string;
  passport: Passport;
}

const BasicInfo = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    title: "",
    firstName: "",
    fatherName: "",
    grandfatherName: "",
    familyName: "",
    lFirstName: "",
    lFatherName: "",
    lGrandfatherName: "",
    lFamilyName: "",
    nationalities: { name: "", id: "" },
    localizedName: {
      firstName: "",
      fatherName: "",
      grandfatherName: "",
      familyName: "",
    },
    nationalId: {
      idNumber: "",
      expiryDate: "",
    },
    maritalStatus: {
      id: 1,
      name: "",
    },
    dependants: "",
    dateOfBirth: "",
    gender: "",
    passport: { no: "", issueDate: "", expiryDate: "" },
  });
  const { data, loading, error, updateUserData } = useUserData(1);
  useEffect(() => {
    if (data) {
      console.log("Fetched Data:", data);
      setUserData(data.user);
    }
  }, [data]);

  const handleEdit = () => setIsEditing(true);

  const handleSave = async () => {
    try {
      await updateUserData(userData);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update user", error);
    }
  };

  const handleChange = (field: string, value: string) => {
    const keys = field.split(".");
    setUserData((prevData) => {
      let updatedData = { ...prevData };
      let tempData: any = updatedData;
      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          tempData[key] = value;
        } else {
          tempData = tempData[key];
        }
      });
      return updatedData;
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No user data available.</p>;

  const info = [
    {
      label: "National ID Number",
      value: userData.nationalId.idNumber,
      field: "nationalId.idNumber",
    },
    {
      label: "National ID Expiry Date",
      value: userData.nationalId.expiryDate,
      field: "nationalId.expiryDate",
    },
    { label: "Title ", value: userData.title || "Mr", field: "title" },
    { label: "", value: "", field: "" },
    { label: "First Name", value: userData.firstName, field: "firstName" },
    { label: "Father Name", value: userData.fatherName, field: "fatherName" },
    { label: "Family Name", value: userData.familyName, field: "familyName" },
    {
      label: "Grand Father Name",
      value: userData.grandfatherName,
      field: "grandfatherName",
    },
    { label: "الأسم الأول", value: userData.lFirstName, field: "lFirstName" },
    { label: "اسم الأب", value: userData.lFatherName, field: "lFatherName" },
    {
      label: "اسم الجد",
      value: userData.lGrandfatherName,
      field: "lGrandfatherName",
    },
    {
      label: "اللقب / اسم العائلة",
      value: userData.lFamilyName,
      field: "lFamilyName",
    },
    {
      label: "Date of Birth",
      value: userData.dateOfBirth,
      field: "dateOfBirth",
    },
    { label: "Gender", value: userData.gender, field: "gender" },
    {
      label: "Nationality",
      value: userData.nationalities.name,
      field: "nationality",
    },
    {
      label: "Additional Nationality",
      value: "",
      field: "additionalNationality",
    },
    {
      label: "Passport No.",
      value: userData.passport?.no || "N/A",
      field: "passportNo",
    },
    {
      label: "Passport Issue Date",
      value: userData.passport?.issueDate || "N/A",
      field: "passportIssueDate",
    },
    {
      label: "Passport Expiry Date",
      value: userData.passport?.expiryDate || "N/A",
      field: "passportExpiryDate",
    },
    {
      label: "",
      value: "",
      field: "",
    },
    {
      label: "Marital Status",
      value: userData.maritalStatus.name,
      field: "maritalStatus.name",
    },
    { label: "Dependants", value: userData.dependants, field: "dependants" },
  ];

  return (
    <Card
      title="Basic Information"
      isEditing={isEditing}
      handleEdit={handleEdit}
      handleSave={handleSave}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:w-[85%]">
        {info.map((field, index) => (
          <div key={index}>
            <InfoField
              field={field}
              isEditing={isEditing}
              handleChange={handleChange}
            />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BasicInfo;
