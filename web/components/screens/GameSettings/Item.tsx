import { DraggableSyntheticListeners, UniqueIdentifier } from "@dnd-kit/core";
import { CSSProperties, forwardRef } from "react";

interface ItemProps {
  id: UniqueIdentifier;
  handleRef?: (element: HTMLElement | null) => void;
  listeners?: DraggableSyntheticListeners;
  style?: CSSProperties;
  handleRemove?: any;
}

const RoundCard = forwardRef<HTMLDivElement, ItemProps>(
  ({ id, handleRef, listeners, handleRemove, ...props }, ref) => {
    const style = {
      width: "250px",
      minWidth: "250px",
      height: "400px",
      minHeight: "400px",
      backgroundColor: "#2E294E",
      borderRadius: "32px",
    };

    return (
      <div style={style} {...props} ref={ref}>
        <div
          style={{
            display: "flex",
            padding: "16px",
            borderBottom: "3px solid #d499b9",
          }}
        >
          <div
            style={{ cursor: "grab", marginRight: "auto", marginLeft: "16px" }}
            ref={handleRef}
            {...listeners}
          >
            <svg
              viewBox="0 0 20 20"
              width="12"
              fill="#E8C1C5"
              transform="scale(2.5) rotate(90)"
            >
              <path d="M7 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 2zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 7 14zm6-8a2 2 0 1 0-.001-4.001A2 2 0 0 0 13 6zm0 2a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 8zm0 6a2 2 0 1 0 .001 4.001A2 2 0 0 0 13 14z"></path>
            </svg>
          </div>
          <div>Round {id}</div>
          <div
            style={{ marginRight: "16px", marginLeft: "auto" }}
            onClick={handleRemove}
          >
            <svg
              width="8"
              viewBox="0 0 22 22"
              fill="#E15656"
              transform="scale(2)"
            >
              <path d="M2.99998 -0.000206962C2.7441 -0.000206962 2.48794 0.0972617 2.29294 0.292762L0.292945 2.29276C-0.0980552 2.68376 -0.0980552 3.31682 0.292945 3.70682L7.58591 10.9998L0.292945 18.2928C-0.0980552 18.6838 -0.0980552 19.3168 0.292945 19.7068L2.29294 21.7068C2.68394 22.0978 3.31701 22.0978 3.70701 21.7068L11 14.4139L18.2929 21.7068C18.6829 22.0978 19.317 22.0978 19.707 21.7068L21.707 19.7068C22.098 19.3158 22.098 18.6828 21.707 18.2928L14.414 10.9998L21.707 3.70682C22.098 3.31682 22.098 2.68276 21.707 2.29276L19.707 0.292762C19.316 -0.0982383 18.6829 -0.0982383 18.2929 0.292762L11 7.58573L3.70701 0.292762C3.51151 0.0972617 3.25585 -0.000206962 2.99998 -0.000206962Z" />
            </svg>
          </div>
        </div>
        <div style={{ padding: "16px" }}>
          <form>
            <input type="radio" id="classic" name="gameType" />
            <label htmlFor="classic">Classic</label>
            <br />
            <input type="radio" id="multiprompt" name="gameType" />
            <label htmlFor="multiprompt">Multiprompt</label>

            <br />
            <br />
            <input
              type="number"
              id="numberOfQuestions"
              name="numberOfQuestions"
              min="2"
              max="15"
            />
            <label htmlFor="numberOfQuestions">Number of Questions</label>

            <br />
            <br />
            <input
              type="number"
              id="playersPerQuestion"
              name="playersPerQuestion"
              min="2"
              max="10"
            />
            <label htmlFor="playersPerQuestion">Number of Questions</label>

            <br />
            <br />
            <input
              type="number"
              id="timePerQuestion"
              name="timePerQuestion"
              min="5"
              max="300"
            />
            <label htmlFor="timePerQuestion">Question timer</label>

            <br />
            <br />
            <input
              type="number"
              id="timePerVote"
              name="timePerVote"
              min="5"
              max="300"
            />
            <label htmlFor="timePerVote">Vote timer</label>
          </form>
        </div>
      </div>
    );
  }
);

export default RoundCard;
