import React, { useState } from 'react';
import Suggestions from './Suggestions';

const VacationPlanner = () => {
  const questions = [
    "Which continent are you interested in? (Asia, Europe, North America, South America, Africa, Australia, Antarctica)",
    "Where would you like to go?",
    "When are you planning to travel?",
    "How many people are traveling?",
    "What’s your budget per person (USD)?",
    "What kind of vacation do you prefer? (Adventure, Relaxing, Romantic, Family, Cultural)",
    "Do you have a passport? (yes/no)"
  ];

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [input, setInput] = useState('');
  const [summaryHtml, setSummaryHtml] = useState('');
  const [showSummary, setShowSummary] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newAnswers = [...answers, input];
    setAnswers(newAnswers);
    setInput('');

    if (step + 1 < questions.length) {
      setStep(step + 1);
    } else {
      generateSummary(newAnswers);
      setShowSummary(true);
    }
  };

  const generateSummary = (responses) => {
    const [continent, place, date, people, budget, type, passport] = responses;
    const summary = `
      🌟 Here's your custom vacation plan:<br>
      - Destination: ${place}, ${continent}<br>
      - Travel Date: ${date}<br>
      - Travelers: ${people}<br>
      - Budget: $${budget} per person<br>
      - Type: ${type}<br>
      - Passport: ${passport}
    `;
    setSummaryHtml(summary);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold mb-4">🌴 Vacation Planner Assistant</h2>
      {!showSummary ? (
        <>
          <div className="mb-4 text-lg">{questions[step]}</div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your answer here..."
            />
          </form>
        </>
      ) : (
        <div>
          <div
            className="text-base"
            dangerouslySetInnerHTML={{ __html: summaryHtml }}
          />
          <Suggestions destination={answers[1]} />
        </div>
      )}
    </div>
  );
};

export default VacationPlanner;
