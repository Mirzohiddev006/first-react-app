import React from "react";
import { Button } from "./components/ui/button";
import { Counter } from "./counter";
interface AppState {
  counters: Array<{ id: number; count: number; step: number }>;
}

class App extends React.Component<{}, AppState> {
  state = {
    counters: [
      { id: 1, count: 0, step: 1 },
      { id: 2, count: 10, step: 1 },
      { id: 3, count: 30, step: 1 }
    ]
  };

  reset = () => {
    this.setState({
      counters: [
        { id: 1, count: 0, step: 1 },
        { id: 2, count: 0, step: 1 },
        { id: 3, count: 0, step: 1 }
      ]
    });
  };

  changeStep = (counterId: number) => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const { counters } = this.state;
    const counterIdx = counters.findIndex(c => c.id === counterId);
    if (counterIdx === -1) return;

    counters[counterIdx].step = nums[Math.floor(Math.random() * nums.length)];
    this.setState({ counters });
  };

  increment = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters[idx].count += counters[idx].step;
    this.setState({ counters });
  };

  decrement = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters[idx].count -= counters[idx].step;
    this.setState({ counters });
  };
  delete = (counterId: number) => {
    const { counters } = this.state;
    const idx = counters.findIndex(c => c.id === counterId);
    if (idx === -1) return;

    counters.splice(idx, 1);
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    console.log(counters);
    return (
      <div className="container mx-auto pt-4 px-4 flex flex-col gap-2">
        <Button variant="blue" className="w-max " onClick={this.reset}>
          Reset
        </Button>
        <Counter
          step={counters[0].step}
          count={counters[0].count}
          increment={() => this.increment(counters[0].id)}
          decrement={() => this.decrement(counters[0].id)}
          changeStep={() => this.changeStep(counters[0].id)}
        />
        <Counter
          step={counters[1].step}
          count={counters[1].count}
          increment={() => this.increment(counters[1].id)}
          decrement={() => this.decrement(counters[1].id)}
          changeStep={() => this.changeStep(counters[1].id)}
        />
        <Counter
          step={counters[2].step}
          count={counters[2].count}
          increment={() => this.increment(counters[2].id)}
          decrement={() => this.decrement(counters[2].id)}
          changeStep={() => this.changeStep(counters[2].id)}
        />
      </div>
    );
  }
}

export default App;
