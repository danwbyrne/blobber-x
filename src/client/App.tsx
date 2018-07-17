import * as React from 'react';
import './App.css';
import { RenderObject } from './components/RenderObject';

class App extends React.Component {
  private readonly renderObjects: ReadonlyArray<any> = [];
  public render() {
    return (
      <div className="Game">
        {this.renderObjects.map((renderObject) => <RenderObject {...renderObject.props} />)}
      </div>
    );
  }
}

export default App;
