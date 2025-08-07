import FormUseTransition from "../components/form-useTransition";
import RemindersList from "../components/RemindersList";

const UseTransitionPage = ({ reminders, createReminder }) => {
  return (
    <>
      <RemindersList reminders={reminders} />
      <FormUseTransition createReminder={createReminder} />
    </>
  );
};

export default UseTransitionPage;
