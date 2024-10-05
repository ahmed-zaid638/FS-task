import React from "react";
import Field from "../../common/Field";

interface InfoFieldProps {
  field: {
    label: string;
    value: string;
    field: string;
  };
  isEditing: boolean;
  handleChange: (field: string, value: string) => void;
}

const InfoField: React.FC<InfoFieldProps> = ({
  field,
  isEditing,
  handleChange,
}) => {
  return (
    <div>
      {isEditing ? (
        <div>
          <label htmlFor="">{field.label}</label>
          <input
            type="text"
            value={field.value}
            onChange={(e) => handleChange(field.field, e.target.value)}
            className={`border rounded p-1 w-full ${field.label =="" ? "hidden" : "block"} `}
          />
        </div>
      ) : (
        <Field label={field.label} value={field.value} />
      )}
    </div>
  );
};

export default InfoField;
