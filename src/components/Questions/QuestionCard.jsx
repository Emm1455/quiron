import { useState, useEffect } from "react";
import { fetchWrapper } from "../../api/fetchWrapper"; // Assuming you have a fetch wrapper
import { endpoints, getURL } from "../../api/connectionData";

// Main Component
const QuestionCard = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState({
    show: false,
    message: "",
    isCorrect: false,
  });

  // Fetch the question data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWrapper(getURL(endpoints.questionExample)); // Endpoint `/example`
        setQuestionData(data);
      } catch (error) {
        console.error("Error fetching question data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle the answer verification
  const handleVerify = () => {
    if (selectedOption === null) {
      setResult({
        show: true,
        message: "Seleccione una respuesta",
        isCorrect: false,
      });
      return;
    }

    const isCorrect = selectedOption === questionData.correctAnswerId;
    const justification = questionData.answers.find(
      (answer) => answer._id === selectedOption
    )?.justification;
    setResult({
      show: true,
      message: isCorrect
        ? "Respuesta correcta"
        : `Respuesta incorrecta: ${
            justification || "Justificación no disponible"
          }`,
      isCorrect,
    });
  };

  if (!questionData) return <p>Loading...</p>;

  return (
    <div className="box column is-8 is-offset-2">
      <QuestionText text={questionData.question} />
      <AnswerOptions
        options={questionData.answers}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />

      <button className="button is-link" onClick={handleVerify}>
        Verificar
      </button>

      {result.show && (
        <VerificationBanner
          message={result.message}
          isCorrect={result.isCorrect}
        />
      )}
    </div>
  );
};

// Question Text Component
// eslint-disable-next-line react/prop-types
const QuestionText = ({ text }) => <h2 className="title is-4 mb-4">{text}</h2>;

// Answer Options Component
// eslint-disable-next-line react/prop-types
const AnswerOptions = ({ options = [""], selectedOption, onSelectOption }) => (
  <div className="buttons">
    {options.map((option) => (
      <button
        key={option._id}
        className={`button ${selectedOption === option._id ? "is-info" : ""}`}
        onClick={() => onSelectOption(option._id)}
      >
        {option.answer}
      </button>
    ))}
  </div>
);

// Verification Banner Component
// eslint-disable-next-line react/prop-types
const VerificationBanner = ({ message, isCorrect }) => (
  <div
    className={`notification ${isCorrect ? "is-success" : "is-danger"} mt-4`}
  >
    {message}
  </div>
);

export default QuestionCard;
