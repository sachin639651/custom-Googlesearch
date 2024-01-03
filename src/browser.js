import React,{useEffect,useState,useRef} from 'react'
import Logo from "./images/logo.png"
import Default from "./images/defaultimg.png"
import Search from "./images/search.png"
import { useParams } from 'react-router-dom' 
import { useNavigate } from "react-router-dom";


export default function Browser() {
  const navigate = useNavigate();
  const [type,settype]=useState("")
const {query}=useParams();
useEffect(()=>{
   
  setsearchvalue(query)
  getdata()
},[query,type])

const [searchvalue,setsearchvalue]=useState()


const handelsearchinput=(e)=>{
  
  let value=e.target.value
  setsearchvalue(value)
}
const [data,setdata]=useState([]);
const[image,setimage]=useState([]);




const getdata=async()=>{

    await fetch(`https://www.googleapis.com/customsearch/v1?key=${Api_Key}&cx=27eb7d7b808234349&q=${query}${type}&start=0`,{
      method:"get",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
      }
     }).then(function(response){
     return response.json();
     }).then(function(data){
      if(type!="&searchType=image"){
      setdata(data.items)}
      else{
        setimage(data.items)
      }
     
     }).catch(function(err){
     console.log(err);
     })
   
}

const imagedisplay=()=>{
  imagecontainer.current.style.display="none"
}


const[searchtype,setsearchtype]=useState()
const imagecontainer=useRef()

const allresultcontainer=useRef();
const imageresultcontainer=useRef();
const searchtypeall=useRef();
const searchtypeimage=useRef()
  return (
<>
<div id="header">
  <div id='content-container'>
<div id='logo-container' onClick={()=>{
  navigate('/')
}}>
<img id='logo-img' src={Logo}></img>
</div>
<div id='searchbar-container'>
  <input id='search-bar-input' onChange={(e)=>{handelsearchinput(e)}} onKeyUp={(e)=>{if(e.key=="Enter" && searchvalue.length>0){
       navigate(`/query/${searchvalue}`)
       if(searchtype=="all"){
        settype("")
      }
     if(searchtype=="image"){
      settype("&searchType=image")
     }
      }}} value={searchvalue} placeholder='Search'></input>
  <div id='Search-button' onClick={()=>{
    if(searchvalue.length>0){
      navigate(`/query/${searchvalue}`)
      if(searchtype=="all"){
        settype("")
      }
     if(searchtype=="image"){
      settype("&searchType=image")
     }
    }
    }}>
    <img id='search-img' src={Search}></img>
  </div>
</div>
  </div>
<div id='search-type-container'>



  <div className='search-type' ref={searchtypeall} style={{"color":"blue","borderBottom":"3px solid blue"}} onClick={()=>{
 settype("")
    allresultcontainer.current.style.display=""
    imageresultcontainer.current.style.display="none"
    searchtypeimage.current.style.color="black"
    searchtypeimage.current.style.border="none"
    searchtypeall.current.style.color="blue"
    searchtypeall.current.style.borderBottom="3px solid blue"
  }}>
    <div className='option-name'>All</div>
    </div>




  <div className='search-type' ref={searchtypeimage} style={{"color":"black","borderBottom":"none"}}  onClick={(e)=>{
 settype("&searchType=image")
     
    allresultcontainer.current.style.display="none"
    imageresultcontainer.current.style.display=""
    searchtypeall.current.style.color="black"
    searchtypeall.current.style.border="none"
    searchtypeimage.current.style.color="blue"
    searchtypeimage.current.style.borderBottom="3px solid blue"
  }}><div className='option-name'>Images</div></div>





</div>
   </div>
<div id="search-result-outer-container" ref={allresultcontainer} >

{
 
  data.map((data)=>{
  
return(
<>

<div className="search-result-inner-container">
  <a href={data.formattedUrl}>
   
<div className='prf-and-url'>
  <div className='web-logo-container'>
    <img className='web-logo'  src={"https://"+data.displayLink+"/favicon.ico"} onError={(e)=>{e.target.src=Default}} ></img>
  </div>
  <div className='web-url-container'>
    <div className='web-url-name'>{data.displayLink}</div>
    <div className='web-url'>{data.formattedUrl}</div>
  </div>
  <div className='web-three-dots-container'></div>
</div>
<div className='website-name'>{data.title}</div>
</a>


<div className='website-desc'>{data.snippet}</div>
 {/* <div className='last-visit-date'>You've visited this page many times. Last visit: 15/1/23</div> */}
</div>
</>
)
})
}
<div className='bottom-container'>
© All rights Reserved 
</div>

</div>



 <div id="search-result-outer-container" ref={imageresultcontainer} style={{"display":"none"}}>
  <div className='inner-container'>
{
image.map((data)=>{

return(
<>
<a href={data.image.contextLink}>
  <div className='image-container' ref={imagecontainer} style={{"display":""}}  >
    <img className='image-result' src={data.link} style={{"height":`200px`,"width":`${data.image.thumbnailWidth}px`,"borderRadius":"5px"}} onError={()=>{imagedisplay()}}></img>

    <div className='image-link' style={{"width":`${data.image.thumbnailWidth}px`}}>{data.displayLink}
    <div className='img-web-ico'>
      <img src={"https://"+data.displayLink+"/favicon.ico"} />
    </div>
    </div>
 <div className='image-title' style={{"width":`${data.image.thumbnailWidth}px`}} >{data.title}</div>
  </div>
  </a>
  </>
)
  })
}


  </div>





</div> 


 
 






</>
  )
}
