import React from 'react'
import ReactDOM from 'react-dom';
import './Tweet.css'
import Author from './Author'
import Message from './Message'

function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Message />
      </div>
    </div>
  )
}


function Avatar() {
  return (
    <img
      src="https://www.gravatar.com/avatar/nothing"
      className="avatar"
      alt="avatar" />
  )
}



export default Tweet