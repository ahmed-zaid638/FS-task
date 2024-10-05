import Card from "../../common/Card";
import Field from "../../common/Field";

function ContactInfo() {
  return (
    <div>
      <Card title="Contact Information">
        <div className="flex gap-20">
          <Field label={"Personal Email"} value={"John.smith@gmail.com "} />
          <Field label={"Mobile"} value={"011223344556"} />
        </div>
      </Card>
    </div>
  );
}

export default ContactInfo;
