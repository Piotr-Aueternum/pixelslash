import React from 'react';
import httpGet from '../httpGet';

export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lvl: 0,
      exp: 0,
      maxexp: 0,
      energy: 0,
      maxenergy: 0,
      atk: 0,
      def: 0,
      hp: 0,
      golden_coins: 0,
      silver_coins: 0,
      time: 0,
    };
  }
  componentDidMount() {
    this.getStats();
    this.setTime();
  }
  setTime() {
    if (this.state.energy > this.state.maxenergy) {
      this.setState({ time: 300 });
      this.tick();
    }
  }
  getStats() {
    httpGet('api/get_stats.php')
      .then((res) => {
        const data = JSON.parse(res);
        this.setState({ ...data });
      });
  }
  tick() {
    const time = 1000;
    const iteration = 1;
    const delay = time * iteration;
    if (this.state.time >= 0) {
      setTimeout(() => {
        this.setState({ time: this.state.time - iteration });
        this.tick();
      }, delay);
    }
  }
  render() {
    return (
      <div>
        <div>
          {this.state.lvl}lvl {this.state.silver_coins}sc {this.state.golden_coins}gc
        </div>
        <div>
          ATK:{this.state.atk} DEF:{this.state.def} EXP:{this.state.exp}/{this.state.maxexp}
        </div>
        <div>
          HP:{this.state.hp}
          ENERGY:{this.state.energy}/{this.state.maxenergy}({this.state.time})
        </div>
      </div>
    );
  }
}
