import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./Navbar";
import Form from "../../components/reusablesUi/Form";
import { useState } from "react";
import { displayToast } from "../../helper/toast";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SENTENCES = [
  {
    id: 1,
    sentence: "Hello, how are you?",
    translation: "こんにちは、お元気ですか？",
  },
  {
    id: 2,
    sentence: "I am good, thank you.",
    translation: "元気です、ありがとう。",
  },
];

export default function ClassPage() {
  const [sentence, setSentence] = useState("");
  const [sentences, setSentences] = useState(SENTENCES);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sentence) {
      displayToast("👀 Oupsy!!! 🙈 Please type a sentence. ");
      return;
    }
    const sentencesCopy = JSON.parse(JSON.stringify(sentences));
    console.log("sentencesCopy", sentencesCopy);
    const newSentence = {
      id: crypto.randomUUID(),
      sentence: sentence,
      translation: "I am sorry, I can't translate it yet.",
    };
    console.log("newSentence", newSentence);
    setSentences([newSentence, ...sentencesCopy]);
    setSentence("");
  };

  const handleChange = (e) => {
    setSentence(e.target.value);
  };

  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />
      <div className="main-content">
        <div className="course-col">
          <div className="sentences">
            {sentences.map((sentence) => (
              <div key={sentence.id} className="sentence">
                <span>{sentence.sentence}</span>
                <span>{sentence.translation}</span>
              </div>
            ))}
          </div>
          <div className="sentence-input-box">
            <h4>How to say in Japanese?</h4>
            <span>
              Type a sentence you want to say in Japanese and i will translate
              it for you.
            </span>
            <Form
              placeholder={"Type your sentence..."}
              label={"ask"}
              onSubmit={handleSubmit}
              onChange={handleChange}
              value={sentence}
            />
          </div>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </ClassPageStyled>
  );
}

const ClassPageStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }

  .main-content {
    flex: 1;
    z-index: 3;
    border: 3px solid blue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .course-col {
      width: 450px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 20px 0;

      .sentences {
        width: 100%;
        flex: 1;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: ${theme.spacing.xs};
        border: 1px solid ${theme.colors.gray};
      }

      .sentence-input-box {
        border: 1px solid ${theme.colors.gray};
        padding: 20px;
        background-color: ${theme.transparentBackground.light};
        backdrop-filter: ${theme.blur.light};
        border-radius: ${theme.borderRadius.extraRound};
        display: flex;
        flex-direction: column;
        text-align: left;
        gap: ${theme.spacing.xxs};
        box-shadow: ${theme.shadows.subtle};
        line-height: 1.6;

        width: 100%;

        h4 {
          font-size: ${theme.fonts.P0};
          color: ${theme.colors.white};
          font-weight: ${theme.weights.medium};
        }

        span {
          font-size: ${theme.fonts.s};
          color: ${theme.colors.grayLight};
          font-weight: ${theme.weights.light};
        }
      }
    }
  }
`;
