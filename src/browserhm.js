import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import icon from "./images/logo.png"
import Menu from "./images/menu.png"

export default function Browserhm() {
    const navigate = useNavigate();
    const [search,setsearch]=useState()
const handelsearch=(e)=>{
let value=e.target.value
setsearch(value)
}

  return (
    <>
    <div id='home-header'>
    <div id='home-profile-container'></div>
      <div id='menu-icon-container'>
        <img src={Menu}></img>
      </div>
      
    </div>




    <div id='home-body'>
    <div id='home-body-container'>
      <div id='home-icon-image-container'>
        <img id='home-icon-image' src={icon}></img>
      </div>
      <div id='search-bar-container'>
      <input id='home-search-input' onKeyUp={(e)=>{if(e.key=="Enter" && search.length>0){
        navigate(`/query/${search}`)
      }}} placeholder='Search' onChange={(e)=>{handelsearch(e)}} value={search}></input>
      <button id="home-search-button" onClick={()=>{navigate(`/query/${search}`)}}>Search</button>
      </div>
    </div>
    </div>
    <div id='home-futer'>
      <div style={{"marginRight":"1%"}}>© All rights Reserved</div>
    <b>Gosekplay</b>
    <div style={{"marginLeft":"1%","cursor":"pointer","color":"blueviolet"}} onClick={()=>{navigate('/term&condition')}} >Term & Conditions</div>
     </div>
    

    </>
  )
}
