import React from 'react'
import ReactDOM from 'react-dom'

var App = React.createClass({
  render() {
    return (
      <div>mini-chat</div>
    )
  }
})

ReactDOM.render(
  <App />,
  document.getElementById('app-content')
)
