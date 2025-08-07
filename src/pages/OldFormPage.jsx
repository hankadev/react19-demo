import FormOld from "../components/form-old";
import RemindersList from "../components/RemindersList";

const OldFormPage = ({ reminders, createReminder }) => {
  return (
    <>
      <RemindersList reminders={reminders} />
      <FormOld createReminder={createReminder} />
    </>
  );
};

export default OldFormPage;
