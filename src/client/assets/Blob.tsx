import React from 'react';
import { RenderObject, RenderObjectProps } from './RenderObject';

const renderCall = (): JSX.Element => (
  <div>
    <svg width={10} height={10}>
      <circle cx={15} cy={15} r={5} stroke="navy" strokeWidth={5} fill="blue" />
    </svg>
  </div>
);

export class Blob extends RenderObject {
  public constructor(props: RenderObjectProps) {
    super(props, renderCall);
  }
}
