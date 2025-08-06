import React from "react";
import ReminderForm from "./index.jsx";

/**
 * Demo component showing how to use the ReminderForm
 * This demonstrates the createReminder prop function
 */
const FormDemo = () => {
  // Mock createReminder function that simulates API calls
  const createReminder = async (title, description) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate different scenarios based on input
    if (title.toLowerCase().includes("error")) {
      // Simulate server error
      return {
        errors: {
          general: "Server error: Unable to create reminder",
        },
      };
    }

    if (title.toLowerCase().includes("invalid")) {
      // Simulate validation errors from server
      return {
        errors: {
          title: "Title contains invalid characters",
          description: "Description is too short",
        },
      };
    }

    // Simulate success (return null or undefined for no errors)
    console.log("Reminder created:", { title, description });
    return null;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React 18 Form Demo</h1>
      <p>This form showcases traditional React 18 form handling patterns:</p>
      <ul>
        <li>Controlled components with useState</li>
        <li>Manual form validation</li>
        <li>Loading states during submission</li>
        <li>Error handling and display</li>
        <li>Form reset after successful submission</li>
      </ul>

      <div style={{ marginTop: "30px" }}>
        <ReminderForm createReminder={createReminder} />
      </div>

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "#e9ecef",
          borderRadius: "5px",
        }}
      >
        <h3>Test Scenarios:</h3>
        <ul>
          <li>
            <strong>Normal case:</strong> Enter any title and description
          </li>
          <li>
            <strong>Server error:</strong> Include "error" in the title
          </li>
          <li>
            <strong>Validation errors:</strong> Include "invalid" in the title
          </li>
          <li>
            <strong>Client validation:</strong> Try submitting empty fields
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FormDemo;
