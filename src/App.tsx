import {Fragment} from 'react';
import './App.css';
import { CreateNewBoard } from "./components/grid/BoardCreate"
import { Header } from "./components/layout/Header"
import {UserOptions} from "./components/layout/UserOptions"
import { WordSection } from "./components/layout/WordSection"
import { Board } from "./components/layout/Board"

function App() {
  return (
    <Fragment>
    {/* Header */}
    <Header />
    {/* User Options */}
    <UserOptions />
    {/* Word Section */}
    <WordSection />
    {/* Board */}
    <Board />
    

    </Fragment>
  );
}

export default App;