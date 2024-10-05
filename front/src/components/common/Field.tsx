import React from "react";

interface FieldProps {
  label: string;
  value: string | number;
  classname?: string;
}

const Field: React.FC<FieldProps> = ({ label, value, classname }) => {
  return (
    <div className={`mb-4 ${classname} `}>
      <div>
        <div className="text-[#737791] text-[12px]">{label}</div>
        <div className="text-[#151D48] font-medium">{value}</div>
      </div>
    </div>
  );
};

export default Field;
