import "./rightbar.css"
import {Users} from "../../dummyData"
import Online from "../online/Online"

export default function Rightbar() {
  return (
    <div className="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayconatiner">
          <img className='birthdayImg' src="./assets/gift.png" alt="" />
          <span className="birthdayText"><b> pola foster </b>and <b> 3 other friends </b> have a birthday</span>
        </div>
        <img src="./assets/ad.png" className="rightbarAd" alt="" />     
        <h4 className="rightbarTitle">Online friends</h4>
      <ul className="rightbarFriendList">
       {Users.map((u)=>(
        <Online key = {u.id} user={u}/>
       ))}
       
        
      </ul>
    </div>
    </div>
  )
}
