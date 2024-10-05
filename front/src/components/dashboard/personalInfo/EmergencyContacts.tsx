import Card from "../../common/Card";
import Field from "../../common/Field";

function EmergencyContacts() {
  return (
    <div>
      <Card title="Emergency Contacts">
        <div className="flex gap-20">
          <Field label={"Emergency Contact Person Name"} value={"John John "} />
          <Field label={"Emergency Relation"} value={"Father"} />
          <Field label={"Emergency Phone"} value={"011224477885"} />
        </div>
      </Card>
    </div>
  );
}

export default EmergencyContacts;
