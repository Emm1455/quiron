import { useState } from "react";
import QuestionText from "./QuestionText";
import PropTypes from "prop-types";

const QuestionCard = ({questionData}) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [result, setResult] = useState({
    show: false,
    message: "",
    isCorrect: false,
  });

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

  return (
    <div className="box column is-8 is-offset-2">
      <QuestionText text={questionData.question} />
      <AnswerOptions
        options={questionData.answers}
        selectedOption={selectedOption}
        onSelectOption={setSelectedOption}
      />

      <div className="has-text-right">
        <button className="button is-link" onClick={handleVerify}>
          Verificar
        </button>
      </div>

      {result.show && (
        <VerificationBanner
          message={result.message}
          isCorrect={result.isCorrect}
        />
      )}
    </div>
  );
};

// Answer Options Component
// eslint-disable-next-line react/prop-types
const AnswerOptions = ({ options = [""], selectedOption, onSelectOption }) => (
  <div className="buttons">
    {options.map((option) => (
      <button
        key={option._id}
        className={`button is-responsive is-fullwidth ${selectedOption === option._id ? "is-info" : ""}`}
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

QuestionCard.propTypes = {
  questionData: PropTypes.func.required,
};

export default QuestionCard;
