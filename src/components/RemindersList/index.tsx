import Reminder from "../Reminder";

interface ReminderItem {
  id: number;
  title: string;
  description: string;
  isPending?: boolean;
}

interface RemindersListProps {
  reminders: ReminderItem[];
}

const RemindersList: React.FC<RemindersListProps> = ({ reminders }) => {
  return (
    <section className="reminders">
      {reminders.map(reminder => (
        <Reminder
          key={reminder.id}
          id={reminder.id}
          title={reminder.title}
          description={reminder.description}
          showSpinner={reminder.isPending}
          className={reminder.isPending ? "optimistic-card" : ""}
        />
      ))}
    </section>
  );
};

export default RemindersList;
