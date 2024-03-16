import styled from "styled-components";
import { theme } from "../../theme/index";
import Navbar from "./navBar/Navbar";
import Form from "../../components/reusablesUi/Form";
import { useState } from "react";
import { displayToast } from "../../utils/toast";
import Board from "./Board";
import Request from "./Request";
import { SENTENCES } from "../../fakeData/sentences";
import Overlay from "./welcomeMessage/Overlay";
import "react-toastify/dist/ReactToastify.css";

export default function ClassPage() {
  const [sentence, setSentence] = useState("");
  const [sentences, setSentences] = useState(SENTENCES);
  const [isVisible, setIsVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSentence(e.target.value);
  };

  return (
    <ClassPageStyled>
      <Navbar />
      <img className="bg" src="/japan_class.png" alt="japan_class" />

      <div className="main-content">
        <Overlay />
        {/* <div className="board">
          <div className="response-box">
            {sentences.map((sentence) => (
              <Board sentence={sentence} key={sentence.id} />
            ))}
          </div>
          <Request>
            <Form
              placeholder={"Type your sentence..."}
              label={"ask"}
              onSubmit={handleSubmit}
              onChange={handleChange}
              value={sentence}
            />
          </Request>
        </div>*/}
      </div>
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;

    .board {
      width: 450px;
      min-width: 380px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-bottom: 20px;

      .response-box {
        width: 100%;
        height: 400px;
        overflow-y: scroll;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.xs};
      }
    }
  }
`;
