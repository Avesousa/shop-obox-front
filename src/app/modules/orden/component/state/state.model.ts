export class State {
  label: string;
  state: number;
  style: string;

  constructor(
    label: string,
    state: number,
    style: string
  ) {
    this.label = label;
    this.state = state;
    this.style = style;
  }
}
