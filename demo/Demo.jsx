
import React from 'react'
import FitterHappierText from '../FitterHappierText'

class Demo extends React.Component {

  constructor () {
    super ()
    this.state = {
      text: 'Fitter Happier',
      caps: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.toggleCaps = this.toggleCaps.bind(this)
  }

  handleChange (e) {
    this.setState({ text: e.target.value })
  }

  toggleCaps () {
    var caps = !this.state.caps
    this.setState({ caps: caps })
  }

  render () {
    var classNames = {
      demo: this.state.caps ? 'caps' : ''
    }
    return (
      <div>
        <FitterHappierText
          className='caps'
          text='React Fitter Happier Text' />
        <FitterHappierText
          className='caps'
          text='React component for fully fluid headings' />
        <hr />
        <div className='mt3 mb1'>
          <label htmlFor='text'
            className='h5 db'>
            Example Text
          </label>
          <input id='text'
            type='text'
            className='mr2 input input-light'
            value={this.state.text}
            onChange={this.handleChange} />
          <button onClick={this.toggleCaps}
            className='btn btn-dark'>
            Toggle Caps
          </button>
        </div>
        <FitterHappierText
          className={classNames.demo}
          text={this.state.text} />
      </div>
    )
  }

}

export default Demo


