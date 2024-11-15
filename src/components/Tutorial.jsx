import { useState, useEffect } from "react";
import { fetchWrapper } from "../api/fetchWrapper"; // Assuming you have a fetch wrapper
import { endpoints, getURL } from "../api/connectionData";
import QuestionCard from "./Questions/QuestionCard";
// import { useCachedData } from "../api";

function Tutorial() {
  const [questionData, setQuestionData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await fetchWrapper(getURL(endpoints.questionExample));
          setQuestionData(data);
        } catch (error) {
          console.error("Error fetching question data:", error);
        }
      };
      fetchData();
    }, []);

  // const questionData = useCachedData(fetchWrapper(getURL(endpoints.questionExample)),"example_q");

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
