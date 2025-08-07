import React, { useState, FormEvent, ChangeEvent, useTransition } from "react";

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
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [isPending, startTransition] = useTransition();

  const handleSubmit = async () => {
    startTransition(async () => {
      const error = await createReminder(title, description);
      if (error?.error) {
        setError(error.error);
        return;
      }
      setTitle("");
      setDescription("");
    });
  };

  return (
    <form autoComplete="off" action={handleSubmit}>
      <p className="error-text">{error}</p>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        disabled={isPending}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>

      <textarea
        name="description"
        rows={5}
        disabled={isPending}
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit" className="create-button" disabled={isPending}>
        {isPending ? "Creating..." : "Create"}
      </button>
    </form>
  );
};

export default Form;
