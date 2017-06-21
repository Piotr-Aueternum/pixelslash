import React from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './Progress-bar';

export default class extends React.Component {
  static propTypes = {
    lvl: PropTypes.number,
    atk: PropTypes.number,
    def: PropTypes.number,
    hp: PropTypes.number,
    exp: PropTypes.number,
    maxexp: PropTypes.number,
    energy: PropTypes.number,
    maxenergy: PropTypes.number,
    time: PropTypes.number,
    onMount: PropTypes.func.isRequired,
  }
  static defaultProps = {
    lvl: 0,
    atk: 0,
    def: 0,
    hp: 0,
    exp: 0,
    maxexp: 0,
    energy: 0,
    maxenergy: 0,
    time: 0,
  }
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }
  componentDidMount() {
    this.setTime();
    const { onMount } = this.props;
    onMount();
  }
  setTime() {
    if (this.state.energy > this.state.maxenergy) {
      this.setState({ time: 300 });
      this.tick();
    }
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
          {this.props.lvl}lvl
        </div>
        <div>
          ATK:{this.props.atk} DEF:{this.props.def}
        </div>
        <div>
          <ProgressBar
            progress={100}
            theme={{
              background: '#b73535',
              gloss: '#f19b9c',
              border: '#d03e3e',
            }}
          >
            HEALTH:{this.props.hp}
          </ProgressBar>
          <ProgressBar
            progress={(this.props.energy / this.props.maxenergy) * 100}
            theme={{
              background: '#8b479a',
              gloss: '#dab9d4',
              border: '#a76bab',
            }}
          >
            ENERGY:{this.props.energy}/{this.props.maxenergy}({this.props.time})
          </ProgressBar>
          <ProgressBar
            progress={(this.props.exp / this.props.maxexp) * 100}
            theme={{
              background: '#76b13b',
              gloss: '#beda85',
              border: '#92c858',
            }}
          >
            EXP:{this.props.exp}/{this.props.maxexp}
          </ProgressBar>
        </div>
      </div>
    );
  }
}
