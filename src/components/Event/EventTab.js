import React, {useState} from 'react'
import EventData from './EventData'
import ReactPlayer from 'react-player/lazy'
import "./Event.css";

import {EventDescriptiondata} from './EventDescriptiondata'
const EventTab = () => {

    const [items, setItems] = useState(EventData);
    const [itemdesc,setItemdesc]= useState(EventDescriptiondata);
    const [displayvar,setDisplayvar] = useState(false);
    const [displaypics,setDisplaypics] = useState(false);
    const filterMenu = (category) => {
        const updatedItems = EventData.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }
    const filterDesc = (category) => {
        const updatedItems = EventDescriptiondata.filter((curElem) => {
            return curElem.category === category;
        });

        setItemdesc(updatedItems);
    }
const clickftn = ()=>{
    filterMenu('aglasemphodenge')
    filterDesc('coffeewithkgpians')
}
    return (
        <>
            <h1 className="mt-1 text-center main-heading">Our Events</h1>
            
            
            <div className="event-tabs container mt-2">
           
                     <div className="event-tab d-flex justify-content-around">
                     <button className="btn event-button" onClick={() => {
                        setDisplayvar(false)
                        setDisplaypics(true)
                        }} >Khat</button>
               
                    
                     <button className="btn event-button" onClick={() => {
                        filterMenu('fandombenches')
                        filterDesc('fandombenches')
                        setDisplayvar(true)
                        setDisplaypics(true)
                     }} >Fandom Benches</button>
                     <button className="btn event-button" onClick={() => {
                        filterMenu('coffeewithkgpians')
                        filterDesc('coffeewithkgpians')
                        setDisplayvar(true)
                        setDisplaypics(true)
                    }} >Coffee With Kgpians</button>
                    <button className="btn event-button" onClick={() => {
                         filterMenu('halloweennight')
                         filterDesc('halloweennight')
                         setDisplayvar(true)
                         setDisplaypics(true)
                    }} >Halloween Night</button>
                    <button className="btn event-button" onClick={() => {
                        filterMenu('welcomefreshers')
                        filterDesc('welcomefreshers')
                        setDisplayvar(true)
                        setDisplaypics(true)
                    }} >Welcome Freshers</button>
                    <button  className="btn event-button" onClick={()=>{
                        setDisplayvar(true)
                        filterMenu('aglasemphodenge')
                        filterDesc('aglasemphodenge')
                        setDisplaypics(true)
                    }} >Agla Sem Phodenge</button>
                 
                    <button className="btn event-button" onClick={() => {
                        setDisplayvar(false)
                        setDisplaypics(true)
                        }} >Buddy Interaction</button>
                    <button className="btn event-button" onClick={() => {
                        setDisplayvar(false)
                        setDisplaypics(false)
                        }} >Rewind 2022</button>
                        
                     
                </div>
            </div>
            {/*Event description*/}
            { displayvar && <div className='event-description text-center mt-3'>{itemdesc.map((elem)=>{
                const {  id,description} = elem;
                return(
                    <p >{description}</p>
                )
            })}</div>}
            {/* Our EventData Items List will come here  PICTURES*/}
            {
            (!displaypics) && <div className="video-player mt-2">
               <ReactPlayer url='https://www.youtube.com/watch?v=6ovlnlzJbao' className="video-play" loop="true" controls="true" />
            </div>
        }
            {displaypics && <div className="event-items container-fluid mt-5">
                
                <div className='row'>
                    <div className="col-11 mx-auto">
                        <div className="row my-5">
                            
                            {
                                
                                items.map((elem) => {
                                    const { id, image} = elem;
                                    return (
                                        
                                         <div className="col-12 col-md-6 col-lg-6 col-xl-4 my-5 event-maindiv" key={id}>
                                         
                                            {/* only for image  */}
                                            <div className='col-12 col-md-10 col-lg-5 img-div'>
                                                    <img src= {image} alt="event-img" className='img-fluid' />  
                                            </div>
                                          
                                            
                                      
                                    </div> 
                                      
                                    )
                            })
                    }
                        </div>
                    </div>
                </div>
        </div>}
        
            
    </>
    )
}

export default EventTab