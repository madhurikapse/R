import React from 'react'
import Navbar from './Navbar'
import "./Components.css"
import { useContext } from 'react'
import { store } from './ContextAPI'
import { Link } from 'react-router-dom'
import {AiOutlineArrowDown} from 'react-icons/ai'

const Bollywood = () => {
  const [data] = useContext(store);
  return (
    <>
    <Navbar/>
    <div className="p-heading">Bollywood <hr className="hr-under"></hr></div>
    <div className='latest'>
    <div>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===2}).map((element)=>(
      <div className='latest1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    </div>
    <div>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===3}).map((element)=>(
      <div className='latest2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    </div>
    <div>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===4}).map((element)=>(
      <div className='latest3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link> 
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    </div>
    </div>
    <div className='top-stories'>
    <h2>Top Stories<hr className="hr-under2"></hr></h2>
    </div>
    <div className='data-container'>
    <div className='data'>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===6}).map((element)=>(
      <div className='data2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===7}).map((element)=>(
      <div className='data3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===8}).map((element)=>(
      <div className='data4' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===9}).map((element)=>(
      <div className='data5' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===10}).map((element)=>(
      <div className='data6' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===12}).map((element)=>(
      <div className='data8' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===13}).map((element)=>(
      <div className='data9' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
}

  <hr></hr>
    {
    data.filter((item)=> {return item.category==="bollywood" && item.id===15}).map((element)=>(
      <div className='data11' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <div className='data-description'>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <p>{element.DataDescription}</p>
        </div>
        </div>
    ))
    }
    <hr></hr>
    </div>
    <div className='top-posts'>
      <div className='top-posts-heading'>Top Posts <hr className="hr-under3"></hr></div>
      {
    data.filter((item)=> {return item.category==="bollywood" && item.id===17}).map((element)=>(
      <div className='top-post1' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>1</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="bollywood" && item.id===18}).map((element)=>(
      <div className='top-post2' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>2</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="bollywood" && item.id===19}).map((element)=>(
      <div className='top-post3' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>3</h1>
        </div>
    ))
    }
    <hr></hr>
      {
    data.filter((item)=> {return item.category==="bollywood" && item.id===20}).map((element)=>(
      <div className='top-post4' key={element.id}>
        <Link to={`/detaildescription/${element.id}`} className='link'><img src={element.DataImage} alt=""></img></Link>
        <Link to={`/detaildescription/${element.id}`} className='link'><h4>{element.DataTitle}</h4></Link>
        <h1>4</h1>
        </div>
    ))
    }
    <hr></hr>
    </div>
    <div className='advertisement'>Advertisement</div>
    </div>
    <div className='load-more'><AiOutlineArrowDown/>LOAD MORE</div>
    </>
  )
}

export default Bollywood




// import React from "react";
// import { useContext } from "react";
// import { Store } from "./Store/DataStore";
// import { Link } from "react-router-dom";


// const Bollywood = () => {
//   const [bollywooddata] = useContext(Store);
//   console.log(bollywooddata);
//   const Filter =bollywooddata.filter((item)=>item.cat==="Bollywood"&&item.for==="Top-Post")

//   return (
//     <div>
//       <h1 style={{ marginLeft: "60PX" }} className="bolly">
//         bollywood 
//       </h1>
//       <h1 className="tp">Top Posts...</h1>
//       <div className="mainbox">
//         <div className="articalside">
//           {bollywooddata
//             .filter((item) => item.cat === "Bollywood" && item.id < 8)
//             .map((value, index) => {
//               // console.log(value);
//               // console.log(bollywooddata);
//               return (
//                 <Link to={`/Genrik/${value.titel}`} state={value} style={{textDecoration:"none"}} >
                
//                 <div className="a1">
//                   <img
//                     src={value.urlforimage}
//                     alt="salman bhai"
//                     className="photo"
//                   />
//                   <div className="subbox">
//                      <h3 className="b18">{value.titel}</h3>
                     
//                     <p>{value.content}</p>
//                     <p> 17 aug 2017</p>
//                   </div>
//                 </div>
//                 </Link>
//               );
//             })}
//         </div>
//         <div className="top-postside">
//           {bollywooddata
//             .filter(
//               (item) => item.cat === "Bollywood" && item.for === "The-Top-Post"
//             )
//             .map((value, index) => {
//               // console.log(value);
//               return(
//                 <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}} >
//                 <div className="topmain">
// <img src={value.urlforimage} alt="Pushpa bhai"  className="mphoto"/>
// <h2>{value.titel } here new annoucement coming soon...</h2>
// <p> 17 aug 2023</p>
//                 </div>
//                 </Link>
//               )
//             })}
//             <div className="smalltop">
//               {Filter.map((value,index)=>{
//                 // console.log(value);
//                 return(
//                   <Link to={`/Genrik/${value.titel}`} state={value}  style={{textDecoration:"none"}} >
//                 <div className="topsmallp">
//                   <img src={value.urlforimage} alt="top-posts" className="smallp"/>
//                   <div>
//                     <h1>{value.titel}</h1>
//                     <p>15 may 2025</p>
//                   </div>
//                 </div>
//                 </Link>

// )
//               })}
             
//             </div>
//             <div className="adverticement">
                
//                 <img className="addphoto" src="https://imgnew.outlookindia.com/public/uploads/articles/2021/1/5/indexnew123n.jpg" alt="advertistment" />
//                 <img className="addphoto" src="https://static.startuptalky.com/2022/12/gift-industry-startuptalky--2-.jpg" alt="advertistment" />
//               </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bollywood;



// navbar :- routing 
// context api 
// uselocation 
// 3 
// 9 