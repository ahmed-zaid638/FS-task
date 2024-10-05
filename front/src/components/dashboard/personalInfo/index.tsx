import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import EmergencyContacts from "./EmergencyContacts";

function PersonalInfo() {
  return (
    <div className="flex flex-col gap-10">
      <BasicInfo />
      <ContactInfo />
      <EmergencyContacts />
      <ContactInfo />
      <EmergencyContacts />
    </div>
  );
}

export default PersonalInfo;
