import "./topbar.css"
import {Search ,Person,Chat,Notifications} from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
         <Search className="searchIcon"/>
         <input placeholder="Search for friend ,post or vedios" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Homepage</span>
          <span className="topbarLinks">timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
         <Person/>
         <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
         <Chat/>
         <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
         <Notifications/>
         <span className="topbarIconBadge">3</span>
          </div>
        </div>
        <img src="/assets/image_2.png" alt="" className="topbarImg" />
      </div>
    </div>
  )
}
