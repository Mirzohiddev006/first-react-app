import { Component } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";

interface CounterProps {
  children?: React.ReactNode;
  initial: number;
}

export class Counter extends Component<CounterProps> {
  state = {
    count: 0
  };

  constructor(props: CounterProps) {
    super(props);
    this.state.count = props.initial;
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  delete = () => {
    this.setState({ deleted: true });
  };

  render() {
    if ((this.state as any).deleted) {
      return null; 
    }

    const { count } = this.state;
    return (
      <div className="flex gap-2">
        <Badge variant={count ? "secondary" : "default"}>{count || "Zero"}</Badge>
        <Button variant="destructive" onClick={this.delete}>
          Delete
        </Button>
        <Button variant="outline" onClick={this.decrement} disabled={count === 0}>
          Decrement
        </Button>
        <Button variant="outline" onClick={this.increment}>
          Increment
        </Button>
      </div>
    );
  }
}
