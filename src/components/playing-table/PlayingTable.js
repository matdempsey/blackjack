import React, { useEffect, useState } from "react";
import { Container, Col, Row, Button, Alert } from "reactstrap";
import Score from "./../label/Score.js";
import Hand from "../hand/Hand.js";
import AlertMessage from "../alert-message/AlertMessage.js";

import deckImage from "../../images/cards/back/regular_back.png";
import "./PlayingTable.css";

const PlayingTable = ({ deck }) => {
  const d = deck;

  const [playerHand, setPlayerHand] = useState([]);
  const [dealerHand, setDealerHand] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [alertMsgValue, setAlertMsgValue] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // intial hand
  useEffect(() => {
    let player = [];
    let dealer = [];

    for (let i = 0; i < 4; i++) {
      i % 2 === 0 ? player.push(d.shift()) : dealer.push(d.shift());
    }

    setPlayerHand(player);
    setDealerHand(dealer);
  }, []);

  // accumalate scores
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

    if (pScore > 21) {
      setAlertMsgValue("You've gone bust!");
      setGameOver(true);
    }
  }, [playerHand]);

  const onHitClick = () => {
    const player = d.shift();
    setPlayerHand(playerHand.concat(player));
  };

  const onStandClick = () => {
    if (playerScore > dealerScore) {
      setAlertMsgValue("You've won!");
    } else if (playerScore < dealerScore) {
      setAlertMsgValue("You've Lost!");
    } else {
      setAlertMsgValue("You've tied with the Dealer.");
    }
    setGameOver(true);
  };

  return (
    <div>
      {gameOver ? <AlertMessage msg={alertMsgValue} /> : null}
      <Container className="grid-container" fluid={true}>
        <Row className="first-row">
          <Col xs="2" className="first-row-first-col">
            <Score name={"Dealer"} points={dealerScore} />
          </Col>
          <Col xs="8" className="first-row-second-col">
            <Hand owner={"Dealer"} cards={dealerHand} />
          </Col>
          <Col xs="2" className="first-row-third-col">
            blank
          </Col>
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
              disabled={gameOver}
              onClick={onHitClick}
            >
              Hit
            </Button>
            <Button
              className="action-btn"
              disabled={gameOver}
              onClick={onStandClick}
            >
              Stand
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PlayingTable;
