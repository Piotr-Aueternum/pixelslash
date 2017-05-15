import React from 'react';
import httpGet from '../httpGet';
import ProgressBar from './Progress-bar';
import ResourcesBar from './Resources-bar';

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
      loading: true,
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
        this.setState({ loading: false });
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
    if (this.state.loading) {
      return (<div>Loading...</div>);
    }
    return (
      <div>
        <ResourcesBar silver={this.state.silver_coins} gold={this.state.golden_coins} />
        <div>
          {this.state.lvl}lvl
          {this.state.silver_coins}<img alt="silver coin standard currency" src="images/silver_coin.png" height="19" />
          {this.state.golden_coins}<img alt="golden coin exclusive currency" src="images/golden_coin.png" height="19" />
        </div>
        <div>
          ATK:{this.state.atk} DEF:{this.state.def}
        </div>
        <div>
          <ProgressBar type="health" progress={100}>
            HEALTH:{this.state.hp}
          </ProgressBar>
          <ProgressBar type="energy" progress={100}>
            ENERGY:{this.state.energy}/{this.state.maxenergy}({this.state.time})
          </ProgressBar>
          <ProgressBar type="exp" progress={100}>
            EXP:{this.state.exp}/{this.state.maxexp}
          </ProgressBar>
        </div>
      </div>
    );
  }
}
