import React from "react";

interface ReminderProps {
  id: number;
  title: string;
  description: string;
  showSpinner?: boolean;
  className?: string;
}

const Reminder: React.FC<ReminderProps> = ({
  id,
  title,
  description,
  showSpinner = false,
  className = "",
}) => {
  return (
    <div className={`reminder-card ${className}`} key={id}>
      {showSpinner && (
        <div className="optimistic-indicator">
          <div className="spinner"></div>
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Reminder;
