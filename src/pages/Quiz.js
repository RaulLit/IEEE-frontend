import "../css/quiz.css"
import { useState } from "react"

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const questions = [
        {
            questionText: "Are you ready?",
            answerOptions: [
                { answerText: "Yes", isCorrect: true },
                { answerText: "No", isCorrect: false }
            ]
        },
        {
            questionText: "In the movie 'The Matrix' what is a glitch in the matrix?",
            answerOptions: [
                { answerText: "A mistake in the programming of the simulation", isCorrect: false },
                { answerText: "A momentary interruption in the simulation caused by an external event", isCorrect: true },
                { answerText: "A manifestation of a person's disbelief in the reality of the simulation", isCorrect: false }
            ]
        },
        {
            questionText: "Which of the following is an example of a glitch in the matrix?",
            answerOptions: [
                { answerText: "Seeing a reflection of yourself that doesn't match your movements", isCorrect: true },
                { answerText: "Hearing a voice in your head that isn't your own", isCorrect: false },
                { answerText: "Feeling like you've been transported to a parallel universe", isCorrect: false }
            ]
        },
        {
            questionText: "What is the highest mountain in the world?",
            answerOptions: [
                { answerText: "Mount Kilimanjaro", isCorrect: false },
                { answerText: "Mount Everest", isCorrect: true },
                { answerText: "Mount Denali", isCorrect: false }
            ]
        }
    ]

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
        setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        } else {
        setShowScore(true);
        }
    };

    return (
        <div className="quiz">
            <div className="welcome">
                <h1>Ready to take the quiz?</h1>
                <h4>Scroll down and check your abilities...</h4>
            </div>
            <div className="quiz-box">
                {showScore &&
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                }
                <div className="question-section">
                    <div className="question-count">
                        <span>Question {currentQuestion + 1}</span>/{questions.length}
                    </div>
                    <div className="question-text">
                        {questions[currentQuestion].questionText}
                    </div>
                </div>
                <div className="answer-section">
                    {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <button
                        key={answerOption.answerText}
                        onClick={() =>
                        handleAnswerOptionClick(answerOption.isCorrect)
                        }
                    >
                        {answerOption.answerText}
                    </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Quiz;