import PropTypes from "prop-types";

const QuestionText = ({ text }) => <h2 className="title is-4 mb-4">{text}</h2>;

QuestionText.propTypes = {
  text: PropTypes.string.isRequired,  // Ensure `text` is a required string
};

export default QuestionText;