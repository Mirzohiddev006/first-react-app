import { Component } from "react";
import { Button } from "./components/ui/button";
import { Badge } from "./components/ui/badge";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";

interface CounterProps {
  count: number;
  step: number;
  increment: () => void;
  decrement: () => void;
  changeStep: () => void;
}

export class Counter extends Component<CounterProps> {
  render() {
    const { count, increment, decrement, step, changeStep } = this.props;

    return (
      <div className="flex gap-2">
        <Badge variant={count ? "secondary" : "default"}>{count || "Zero"}</Badge>
        <Button variant="outline" onClick={changeStep}>
          Step: {step}
        </Button>
        <Button variant="destructive">
          <TrashIcon />
        </Button>
        <Button variant="outline" disabled={count === 0} onClick={decrement}>
          <MinusIcon />
        </Button>
        <Button variant="outline" onClick={increment}>
          <PlusIcon />
        </Button>
      </div>
    );
  }
}
