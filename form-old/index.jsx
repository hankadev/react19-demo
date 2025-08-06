import React, { useState } from "react";

/**
 * A simple React form component showcasing React 18 form handling patterns.
 * This component demonstrates:
 * - Controlled inputs with useState
 * - Form submission handling
 * - Loading/pending states
 * - Error handling and display
 * - Basic form validation
 */
const ReminderForm = ({ createReminder }) => {
  // Form field states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // UI states
  const [isPending, setIsPending] = useState(false);
  const [errors, setErrors] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();

    // Reset previous states
    setErrors(null);
    setIsPending(true);
    setIsSubmitted(false);

    // Basic client-side validation
    if (!title.trim()) {
      setErrors({ title: "Title is required" });
      setIsPending(false);
      return;
    }

    if (!description.trim()) {
      setErrors({ description: "Description is required" });
      setIsPending(false);
      return;
    }

    try {
      // Call the createReminder function passed as prop
      const result = await createReminder(title.trim(), description.trim());

      if (result && result.errors) {
        // Handle server-side errors
        setErrors(result.errors);
      } else {
        // Success - reset form
        setTitle("");
        setDescription("");
        setIsSubmitted(true);

        // Clear success message after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      // Handle unexpected errors
      setErrors({
        general: error.message || "An unexpected error occurred",
      });
    } finally {
      setIsPending(false);
    }
  };

  // Handle input changes
  const handleTitleChange = e => {
    setTitle(e.target.value);
    // Clear title error when user starts typing
    if (errors?.title) {
      setErrors(prev => ({ ...prev, title: null }));
    }
  };

  const handleDescriptionChange = e => {
    setDescription(e.target.value);
    // Clear description error when user starts typing
    if (errors?.description) {
      setErrors(prev => ({ ...prev, description: null }));
    }
  };

  return (
    <div className="reminder-form-container">
      <h2>Create New Reminder</h2>

      {/* Success message */}
      {isSubmitted && (
        <div className="success-message" style={successMessageStyle}>
          ✅ Reminder created successfully!
        </div>
      )}

      {/* General error message */}
      {errors?.general && (
        <div className="error-message" style={errorMessageStyle}>
          ❌ {errors.general}
        </div>
      )}

      <form onSubmit={handleSubmit} style={formStyle}>
        {/* Title input */}
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="title" style={labelStyle}>
            Title *
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={handleTitleChange}
            disabled={isPending}
            placeholder="Enter reminder title"
            style={{
              ...inputStyle,
              ...(errors?.title ? errorInputStyle : {}),
              ...(isPending ? disabledInputStyle : {}),
            }}
          />
          {errors?.title && (
            <span className="field-error" style={fieldErrorStyle}>
              {errors.title}
            </span>
          )}
        </div>

        {/* Description textarea */}
        <div className="form-group" style={formGroupStyle}>
          <label htmlFor="description" style={labelStyle}>
            Description *
          </label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            disabled={isPending}
            placeholder="Enter reminder description"
            rows={4}
            style={{
              ...textareaStyle,
              ...(errors?.description ? errorInputStyle : {}),
              ...(isPending ? disabledInputStyle : {}),
            }}
          />
          {errors?.description && (
            <span className="field-error" style={fieldErrorStyle}>
              {errors.description}
            </span>
          )}
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isPending || !title.trim() || !description.trim()}
          style={{
            ...buttonStyle,
            ...(isPending || !title.trim() || !description.trim()
              ? disabledButtonStyle
              : {}),
          }}
        >
          {isPending ? "Creating..." : "Create Reminder"}
        </button>
      </form>
    </div>
  );
};

// Inline styles for the component (React 18 era approach)
const formStyle = {
  maxWidth: "500px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  backgroundColor: "#f9f9f9",
};

const formGroupStyle = {
  marginBottom: "20px",
};

const labelStyle = {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold",
  color: "#333",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "16px",
  boxSizing: "border-box",
};

const textareaStyle = {
  ...inputStyle,
  resize: "vertical",
  fontFamily: "inherit",
};

const errorInputStyle = {
  borderColor: "#e74c3c",
  backgroundColor: "#fdf2f2",
};

const disabledInputStyle = {
  backgroundColor: "#f5f5f5",
  cursor: "not-allowed",
  opacity: 0.7,
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "4px",
  fontSize: "16px",
  cursor: "pointer",
  fontWeight: "bold",
};

const disabledButtonStyle = {
  backgroundColor: "#6c757d",
  cursor: "not-allowed",
};

const successMessageStyle = {
  padding: "10px",
  backgroundColor: "#d4edda",
  color: "#155724",
  border: "1px solid #c3e6cb",
  borderRadius: "4px",
  marginBottom: "20px",
};

const errorMessageStyle = {
  padding: "10px",
  backgroundColor: "#f8d7da",
  color: "#721c24",
  border: "1px solid #f5c6cb",
  borderRadius: "4px",
  marginBottom: "20px",
};

const fieldErrorStyle = {
  color: "#e74c3c",
  fontSize: "14px",
  marginTop: "5px",
  display: "block",
};

export default ReminderForm;
