import React, { useState } from "react";
import Buttons from "./Buttons/Buttons";

//importing Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [votes, setVotes] = useState(0);
  const [novotes, setNoVotes] = useState(0);

  const addVotes = () => {
    setVotes(votes + 1);
  };
  const removeVotes = () => {
    setNoVotes(novotes + 1);
  };
  const neutralVotes = () => {
    setVotes(0);
    setNoVotes(0);
  };

  return (
    <div>
      <Buttons click={addVotes}>
        LIKES
        <br />
        <FontAwesomeIcon icon={faThumbsUp} />
      </Buttons>
      <Buttons click={removeVotes}>
        UNLIKE
        <br />
        <FontAwesomeIcon icon={faThumbsDown} />
      </Buttons>
      <Buttons click={neutralVotes}>
        NEUTRAL
        <br />
        <br />
      </Buttons>
      <h1>Number of Likes:</h1>
      <div>
        {votes >= 1 ? ( // This is the conditional rendering of the content
          <p>You just liked</p>
        ) : null}

        <h3>Likes:{votes}</h3>

        <h3>Unlike:{novotes}</h3>
      </div>
    </div>
  );
};

export default App;
