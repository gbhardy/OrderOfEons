//lets you add players to game and start game

import { useState } from 'react';
import {Game} from '../../game/game.js';
import {Player} from '../../game/player.js';
import Guess from '../../Components/Guess.js'
import HandView from '../../Components/HandView.js'

export default function GamePlay(){
  const [game, setGame] = useState(null);
  const [gameStatus, setGameStatus] = useState("SETUP");
  const [guessPlayer, setGuessPlayer] = useState(null);
  const [players, setPlayers] = useState([new Player('', 0), new Player('', 1)]);

  function handlePlayerChange(id, e){
    const oldPlayers = players;
    oldPlayers[id].name = e.target.value;
    setPlayers([oldPlayers[0], oldPlayers[1]]);
  }

  function playOnClick(){
    setGameStatus("PLAY");
    const newGame = new Game(players, 2);//todo more cards
    newGame.startGame();
    setGame(newGame);//todo does this work?
    setGuessPlayer(players[0]);
    console.log(players[0].name);
  }

  const playerList = players.map( player => (
      <li key={player.id}>
        <label>
          Player {player.id}: {' '}
          <input
            value={player.getName()}
            onChange={(e) => handlePlayerChange(player.id, e)}
            />
        </label>
      </li>
  ));


  return(
    <>
     {gameStatus === 'SETUP' &&
     <>
      <h1>Play order of Eons!</h1>
      <p>Enter player info</p>
      <ul>
        {playerList}
      </ul>
      <button onClick={playOnClick}>
        Play!
      </button>
     </>
      }
      {gameStatus === 'PLAY' &&
        <>
        <Guess card={game.getCardInPlay()}/>
        <HandView player={guessPlayer}/>
        </>
      }
    </>
  )

}
