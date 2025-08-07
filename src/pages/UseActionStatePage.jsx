import FormUseActionState from "../components/form-useActionState";
import RemindersList from "../components/RemindersList";

const UseActionStatePage = ({ reminders, createReminder }) => {
  return (
    <>
      <RemindersList reminders={reminders} />
      <FormUseActionState createReminder={createReminder} />
    </>
  );
};

export default UseActionStatePage;
