import React from "react"

function TwoDot () {
    return (
<li className="fret-li">
          {" "}
          <div className="dots-double">
           <span></span>
           <span></span>
          </div>
          
          <span note="es" className="note-name">
            <i class="note-name">
              <span></span>
            </i>
          </span>
          <span note="as" class="">
            <i class="note-name">
              <span></span>
            </i>
          </span>
          <span note="b" class="">
            <i class="note-name">
              <span></span>
            </i>
          </span>
          <span note="f" class="">
            <i class="note-name">
              <span></span>
            </i>
          </span>
        </li>
    );
}

export default TwoDot;