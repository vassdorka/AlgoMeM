import React from 'react';
import "./components/stylesheets/Cursor/Cursor.css"

const Cursor = () => {
  React.useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      document.getElementById("cursor").style.left = e.pageX + 35 + 'px';
      document.getElementById("cursor").style.top = e.pageY + 35 + 'px';
      
      if(e.pageX > 1520 || e.pageY > 709) {
        document.getElementById("cursor").style.width = "0";
        document.getElementById("cursor").style.height = "0";
      } else {
        document.getElementById("cursor").style.width = "20px";
        document.getElementById("cursor").style.height = "20px";
      }

    });
  });

  return (
    <div id="cursor"></div>
  )
}


export default Cursor