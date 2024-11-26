import { endpoints } from "../api/connectionData";
import QuestionCard from "./Questions/QuestionCard";
import useCachedData from "../api/useCachedData";

function Tutorial() {
  const questionData = useCachedData(endpoints.questionExample, "exampleQuestion");

  return (
    <>
    {questionData ? (
      <QuestionCard questionData={questionData} />
    ) : (
      <p>Loading...</p>
    )}
  </>
  );
}

export default Tutorial;
