import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import ChatBox from '../../components/chat-box/ChatBox'
import TitleBar from '../../components/title-bar/TitleBar'
import UserList from '../../components/user-list/UserList'
import './ChatRoom.scss'

function ChatRoom() {
  const nav = useNavigate()
  const users = useSelector((state: any) => state.users)

  useEffect(() => {
    if (!users.userId) {
      nav('/')
    }
  }, [])

  return (
    <>
      {
        users.userId && <div className='chat-room'>
          <TitleBar />
          <div className='chat-container'>
            <UserList />
            <ChatBox />
          </div>
        </div>
      }
    </>
  )
}

export default ChatRoom