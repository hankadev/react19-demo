import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navigation from "./components/Navigation";
import CodePreview from "./components/CodePreview";

import OldFormPage from "./pages/OldFormPage";
import UseTransitionPage from "./pages/UseTransitionPage";
import UseActionStatePage from "./pages/UseActionStatePage";
import UseOptimisticPage from "./pages/UseOptimisticPage";

import FormOldCode from "./components/form-old/index.tsx?raw";
import FormUseActionStateCode from "./components/form-useActionState/index.tsx?raw";
import FormUseTransitionCode from "./components/form-useTransition/index.tsx?raw";
import UseOptimisticPageCode from "./pages/UseOptimisticPage.jsx?raw";
import Footer from "./components/Footer";

const DELAY = 1000;

const App = () => {
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
      <header>
        <Navigation />
        <h1>Remember it &#128161;</h1>
      </header>
      <main>
        <div className="main-content">
          <div className="left-column">
            <Routes>
              <Route path="/" element={<Navigate to="/old" replace />} />
              <Route
                path="/old"
                element={
                  <OldFormPage
                    reminders={reminders}
                    createReminder={createReminder}
                  />
                }
              />
              <Route
                path="/use-transition"
                element={
                  <UseTransitionPage
                    reminders={reminders}
                    createReminder={createReminder}
                  />
                }
              />
              <Route
                path="/use-action-state"
                element={
                  <UseActionStatePage
                    reminders={reminders}
                    createReminder={createReminder}
                  />
                }
              />
              <Route
                path="/use-optimistic"
                element={
                  <UseOptimisticPage
                    reminders={reminders}
                    createReminder={createReminder}
                  />
                }
              />
            </Routes>
          </div>

          <div className="right-column">
            <Routes>
              <Route path="/" element={<Navigate to="/old" replace />} />
              <Route
                path="/old"
                element={<CodePreview code={FormOldCode} language="tsx" />}
              />
              <Route
                path="/use-transition"
                element={
                  <CodePreview code={FormUseTransitionCode} language="tsx" />
                }
              />
              <Route
                path="/use-action-state"
                element={
                  <CodePreview code={FormUseActionStateCode} language="tsx" />
                }
              />
              <Route
                path="/use-optimistic"
                element={
                  <CodePreview code={UseOptimisticPageCode} language="jsx" />
                }
              />
            </Routes>
          </div>
        </div>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
