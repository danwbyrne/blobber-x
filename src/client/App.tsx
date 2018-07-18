import * as React from 'react';
import './App.css';
import { Blob } from './assets/Blob';

class App extends React.Component {
  private readonly renderObjects: ReadonlyArray<any> = [];
  public constructor(props:any) {
    super(props)
    this.renderObjects = [
      new Blob(props),
    ]
  }
  public render() {
    return (
      <div className="Game">
        {this.renderObjects.map((renderObject) => renderObject.render())}
      </div>
    );
  }
}

export default App;
