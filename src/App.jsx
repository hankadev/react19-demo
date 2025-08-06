import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import FormOld from "./components/form-old";
import Navigation from "./components/navigation";

const DELAY = 1000;

function App() {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      title: "React 19",
      description: "Get familiar with React 19 features!",
    },
  ]);

  const createReminder = async (title, description) => {
    await new Promise(resolve => setTimeout(resolve, DELAY));

    if (!title.trim()) {
      return { error: "Title is required" };
    }

    if (title.toLowerCase().includes("error")) {
      return { error: "Something went wrong :(" };
    }

    setReminders(prev => [
      ...prev,
      {
        id: prev.length + 1,
        title: title.trim(),
        description: description.trim(),
      },
    ]);
  };

  return (
    <Router>
      <main>
        <Navigation />
        <h1>Remember it &#128161;</h1>

        <section className="reminders">
          {reminders.map(reminder => (
            <div className="reminder-card" key={reminder.id}>
              <h3>{reminder.title}</h3>
              <p>{reminder.description}</p>
            </div>
          ))}
        </section>

        <Routes>
          <Route path="/" element={<Navigate to="/old" replace />} />
          <Route
            path="/old"
            element={<FormOld createReminder={createReminder} />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
