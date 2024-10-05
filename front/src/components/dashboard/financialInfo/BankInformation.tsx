
import Card from "../../common/Card";
import Field from "../../common/Field";

function BankInformation() {
  return (
    <div>
      <Card title="Bank Information">
        <div className="flex gap-20">
          <Field label={"Bank Name"} value={"CIB"} />
          <Field label={"IBAN"} value={"12346546413216446"} />
        </div>
      </Card>
    </div>
  );
}

export default BankInformation;
