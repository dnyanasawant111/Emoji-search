

import React, { useState, useEffect } from "react"
import EmojiData from './Server.json';

export default function App() {

  const [search, setSearch] = useState('')
  const [data, setData] = useState([])




  useEffect(() => {

    const filterData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()))
    setData(filterData);
  }, [search])




  return (
    <div className="em">
      <br /> <br />

      <input className="rounded-pill" placeholder="search" type={"text"} onChange={(e) => setSearch(e.target.value)} /> <br /> <br />


      {data.length == 0 ? <h1>not found</h1> : console.log(data.length)}

      {data.map((emoji, i) => {
        return (
          <div key={i}   >


            <h1 className="main1" key={emoji.title}  > {emoji.symbol}  {emoji.title}  </h1>
          </div>
        )

      })}
    </div>
  )
}