import * as React from 'react';
import { Coordinates } from '../../shared/utils';

export interface RenderObjectProps {
  // solid basic ones I want to be required
  readonly id: number;
  readonly location: Coordinates;
  readonly type: string;

  readonly renderCall: () => JSX.Element;

  // props that could be optional, including now for testing
  readonly lookDir?: Coordinates;
  readonly size?: number;
}

export abstract class RenderObject extends React.Component {
  constructor(props: RenderObjectProps) {
    super({ ...props, renderCall: undefined });
    this.render = props.renderCall;
  }
}
