import React from 'react';
import "./components/stylesheets/Cursor/Cursor.css"

function CursorHome () {
  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      document.getElementById("cursorHome").style.left = e.pageX + 35 + 'px';
      document.getElementById("cursorHome").style.top = e.pageY + 35 + 'px';

      if(e.pageX > 1520) {
        document.getElementById("cursorHome").style.width = "0";
        document.getElementById("cursorHome").style.height = "0";
      } else {
        document.getElementById("cursorHome").style.width = "20px";
        document.getElementById("cursorHome").style.height = "20px";
      }
    });
  });

  return (
    <div id="cursorHome"></div>
  )
}


export default CursorHome