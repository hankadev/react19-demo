import React, { useState, FormEvent, ChangeEvent } from "react";

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

  const [isPending, setIsPending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsPending(true);
    const result = await createReminder(title, description);
    setIsPending(false);

    if (result && result.error) {
      setError(result.error);
      return;
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <p className="error-text">{error}</p>

      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <label htmlFor="description">Description</label>

      <textarea
        name="description"
        rows={5}
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
