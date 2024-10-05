import React from "react";
interface CardProps {
  title: string;
  children?: React.ReactNode;
  className?: string;
  handleEdit?: () => void;
  handleSave?: () => void;
  isEditing?: boolean;
}
const Card = ({
  title,
  children,
  className,
  handleEdit,
  handleSave,
  isEditing,
}: CardProps) => {
  return (
    <div className={`bg-white shadow-md rounded-2xl p-4 py-10  ${className}`}>
      <div className="flex justify-between mb-4">
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <button
          className="bg-[#0058A9] text-white rounded-[4px] px-8 py-1"
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
      {children}
    </div>
  );
};

export default Card;
