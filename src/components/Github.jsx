import React from 'react'
import GitHubCalendar from 'react-github-calendar';


export const Github = () => {
  return (
    <div  className="github-content">
        <div className = "github-card">
        <text className='github-title'>Github Calendar</text>
        <div className='github-cal'>
        <GitHubCalendar username="shaileshwebdeveloper" />
        </div>

        </div>
        
   </div>
  )
}
