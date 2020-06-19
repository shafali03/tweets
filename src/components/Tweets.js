import React from 'react'
import ReactDOM from 'react-dom';
import './Tweet.css'
import Author from './Author'
import './Author.css'
import Message from './Message'


function Tweet() {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author /><Time />
        <Message />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
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



const Time = () => (
  <span className="time">5h ago</span>
)

const ReplyButton = () => (
  <i className="fa fa-reply reply-button" />
)


const RetweetButton = () => (
  <i className="fa fa-retweet retweet-button" />
)

const LikeButton = () => (
  <i className="fa fa-heart like-button" />
)

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
)



export default Tweet