import FormUseTransition from "../components/form-useTransition";
import RemindersList from "../components/RemindersList";

const UseTransitionPage = ({ reminders, createReminder }) => {
  return (
    <>
      <title>useTransition example</title>
      <meta name="keywords" content="React 19, useTransition" />
      <RemindersList reminders={reminders} />
      <FormUseTransition createReminder={createReminder} />
    </>
  );
};

export default UseTransitionPage;
