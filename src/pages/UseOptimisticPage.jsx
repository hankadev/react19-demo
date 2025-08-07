import React, { useOptimistic } from "react";
import FormUseActionState from "../components/form-useActionState";
import RemindersList from "../components/RemindersList";

const UseOptimisticPage = ({ reminders, createReminder }) => {
  const [optimisticReminders, addOptimisticReminder] = useOptimistic(
    reminders,
    (state, newReminder) => [...state, { ...newReminder, isPending: true }],
  );

  const createReminderOptimistic = async (title, description) => {
    const optimisticReminder = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
    };

    addOptimisticReminder(optimisticReminder);

    return await createReminder(title, description);
  };

  return (
    <>
      <RemindersList reminders={optimisticReminders} />
      <FormUseActionState createReminder={createReminderOptimistic} />
    </>
  );
};

export default UseOptimisticPage;
