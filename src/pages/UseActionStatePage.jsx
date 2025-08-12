import FormUseActionState from "../components/form-useActionState";
import RemindersList from "../components/RemindersList";

const UseActionStatePage = ({ reminders, createReminder }) => {
  return (
    <>
      <title>useActionState example</title>
      <meta name="keywords" content="React 19, useActionState" />
      <RemindersList reminders={reminders} />
      <FormUseActionState createReminder={createReminder} />
    </>
  );
};

export default UseActionStatePage;
