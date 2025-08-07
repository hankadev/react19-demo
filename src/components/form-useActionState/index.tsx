import React, { useActionState } from "react";

interface CreateReminderResult {
  error?: string;
}

interface FormProps {
  createReminder: (
    title: string,
    description: string,
  ) => Promise<CreateReminderResult | void>;
}

const Form: React.FC<FormProps> = ({ createReminder }) => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const title = formData.get("title");
      const description = formData.get("description");

      const error = await createReminder(title, description);

      if (error) {
        return error;
      }

      // any logic for the successful submission
      return null;
    },
    null,
  );

  return (
    <form autoComplete="off" action={submitAction}>
      <p className="error-text">{error?.error}</p>

      <label htmlFor="title">Title</label>
      <input type="text" name="title" />

      <label htmlFor="description">Description</label>
      <textarea name="description" rows={5} />

      <button type="submit" className="create-button" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default Form;
