import FormOld from "../components/form-old";
import RemindersList from "../components/RemindersList";

const OldFormPage = ({ reminders, createReminder }) => {
  return (
    <>
      <title>React 18 example</title>
      <meta name="keywords" content="React 18, traditional form handling" />
      <RemindersList reminders={reminders} />
      <FormOld createReminder={createReminder} />
    </>
  );
};

export default OldFormPage;
