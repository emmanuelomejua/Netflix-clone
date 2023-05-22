import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@mui/icons-material";
import { apiRoute } from "../../utils/apiRoute";
import axios from 'axios'

const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjYzNDBkYTEzODE0NmM5MmMyYjM4YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDY4NzcxNywiZXhwIjoxNjg1MjkyNTE3fQ.8qzclHh2Fau29pI6rLdQ3vsaa17mECOUEnnzAw5woy4'


export default function WidgetSm() {

  const [newUsers, setNewUsers] = useState([])

  useEffect(()=> {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(apiRoute + 'users?new=true', {
          headers: {
            token: `Bearer ${TOKEN}`
          }
        })
        setNewUsers(res.data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchUsers()
  }, [])

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((users) => (
               <li className="widgetSmListItem">
               <img
                 src={users.profilePic}
                 alt=""
                 className="widgetSmImg"
               />
               <div className="widgetSmUser">
                 <span className="widgetSmUsername">{users.email}</span>
                 <span className="widgetSmUserTitle">{users.username}</span>
               </div>
               <button className="widgetSmButton">
                 <Visibility className="widgetSmIcon" />
                 Display
               </button>
             </li>
        ))}
   
      </ul>
    </div>
  );
}
