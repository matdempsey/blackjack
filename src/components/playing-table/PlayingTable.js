import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import Score from "./../label/Score.js";
import Hand from "../hand/Hand.js";
import AlertMessage from "../alert-message/AlertMessage.js";
import { dealerActionHit } from "../../ai/dealerAI.js";

import deckImage from "../../images/cards/back/regular_back.png";
import "./PlayingTable.css";

const PlayingTable = ({ deck }) => {
  const d = deck;

  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [alertMsgValue, setAlertMsgValue] = useState("");
  const [showAlertMsg, setShowAlertMsg] = useState(false);
  const [disabled, setDisabled] = useState(false);

  // intial hand
  useEffect(() => {
    let tempPlayerArr = [];
    let tempDealerArr = [];

    for (let i = 0; i < 4; i++) {
      i % 2 === 0
        ? tempPlayerArr.push(d.shift())
        : tempDealerArr.push(d.shift());
    }

    setPlayerHand(tempPlayerArr);
    setDealerHand(tempDealerArr);
  }, []);

  // accumulate scores
  useEffect(() => {
    const pScore =
      playerHand.length > 0
        ? playerHand.reduce((accum, curr) => {
            return accum + curr.points;
          }, 0)
        : playerScore;

    const dScore =
      dealerHand.length > 0
        ? dealerHand.reduce((accum, curr) => {
            return accum + curr.points;
          }, 0)
        : dealerScore;

    setPlayerScore(pScore);
    setDealerScore(dScore);

    // bust if initial hand contains two aces, as ace only represents 11 points currently.
    if (pScore > 21) {
      setAlertMsgValue("Bust! You Lose.");
      setDisabled(true);
      setShowAlertMsg(true);
    } else if (dScore > 21) {
      setAlertMsgValue("Dealer is Bust. You Win!");
      setDisabled(true);
      setShowAlertMsg(true);
    }
  }, [playerHand, dealerHand]);

  const onHitClick = () => {
    const dealerAct = dealerActionHit(dealerScore);

    if (dealerAct) {
      const hitCard = d.shift();
      setDealerHand(dealerHand.concat(hitCard));
    }

    const hitCard = d.shift();
    setPlayerHand(playerHand.concat(hitCard));
  };

  const onStandClick = () => {
    let dealerHit = true;
    let mergingArr = [];
    let dScore = dealerScore;

    while (dealerHit) {
      dealerHit = dealerActionHit(dScore);

      if (dealerHit) {
        const hitCard = d.shift();
        dScore = dScore + hitCard.points;
        mergingArr.push(hitCard);
      }
    }

    if (mergingArr.length > 0) {
      setDealerHand(dealerHand.concat(mergingArr));
    }
    setDisabled(true);
  };

  const onEndClick = () => {
    if (playerScore <= 21 && playerScore > dealerScore) {
      setAlertMsgValue("You Win!");
    } else if (dealerScore <= 21 && dealerScore > playerScore) {
      setAlertMsgValue("You Lose!");
    } else if (playerScore === dealerScore) {
      setAlertMsgValue("You've tied with the Dealer.");
    }
    setShowAlertMsg(true);
    setDisabled(true);
  };

  return (
    <div>
      {showAlertMsg ? <AlertMessage message={alertMsgValue} /> : null}
      <Container className="grid-container" fluid={true}>
        <Row className="first-row">
          <Col xs="2" className="first-row-first-col">
            <Score name={"Dealer"} points={dealerScore} />
          </Col>
          <Col xs="8" className="first-row-second-col">
            <Hand owner={"Dealer"} cards={dealerHand} />
          </Col>
          <Col xs="2" className="first-row-third-col"></Col>
        </Row>

        <Row className="second-row">
          <Col xs="2" className="second-row-col-flex-end">
            <img
              width="110px"
              height="160px"
              src={deckImage}
              alt="Picture of a deck of cards"
            />
          </Col>
        </Row>

        <Row className="third-row">
          <Col xs="2" className="third-row-first-col">
            <Score name={"Player"} points={playerScore} />
          </Col>
          <Col xs="8" className="third-row-second-col">
            <Hand owner={"Player"} cards={playerHand} />
          </Col>
          <Col xs="2" className="third-row-third-col">
            <Button
              className="action-btn"
              disabled={disabled}
              onClick={onHitClick}
            >
              Hit
            </Button>
            <Button
              className="action-btn"
              disabled={disabled}
              onClick={onStandClick}
            >
              Stand
            </Button>
            <Button
              className="action-btn"
              disabled={!disabled}
              onClick={onEndClick}
            >
              End
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayingTable;
