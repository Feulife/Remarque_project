import React, { useEffect } from "react";

const Favorites = () => {
  useEffect (() => {
    document.title = 'Favorites - Remarque'
  })

  retrun (
    <div>
      <h1>Remarque</h1>
      <p>These are my favorites</p>
    </div>
  )
}

export default Favorites;