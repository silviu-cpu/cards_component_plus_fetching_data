/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import Modal  from 'react-modal'
import {MdClose} from 'react-icons/md'

Modal.setAppElement('#root')

function CardItem(props) {
    const [display, setDisplay] = useState("notdisplayed")
    const [modalIsOpen, setModalIsOpen] = useState(false)
  
    
    const showButton = e => {
        e.preventDefault();
        setDisplay("displayed")
    }

    const hideButton = e => {
        e.preventDefault();
        setDisplay("notdisplayed");
    }

    return (
        <>
            <li className="cards__item" onMouseEnter={e =>showButton(e)} onMouseLeave={e => hideButton(e)}>
                <div className="cards__item__div">
                    <figure className="cards__item__pic-wrap">
                        <img src={props.src} alt="Post Image" className="cards__item__img" />
                    </figure>

                    <button className={display} onClick={() => setModalIsOpen(true)} >Learn more</button>

                    <div className="cards__item__info">
                        <p className="circles"><FontAwesomeIcon icon={faCircle} color="#00BCD3"/> <FontAwesomeIcon icon={faCircle} color="#FEC106"/></p>
                        <h3 className="cards__item__text">{props.text}</h3>
                        <p className="text__data">{props.content}</p>
                        <div className="left">{props.name}-{props.role}</div> 
                        <div className="right">{props.date}</div>
                        
                        
                    </div>
                </div>
            </li>
            
            {/* our React Modal */}

            <Modal 
            isOpen={modalIsOpen} 
            shouldCloseOnOverlayClick={false} //not closing the Modal when clicking outside of the Modal
            onRequestClose={() => setModalIsOpen(false)} //closing the Modal when presing "Esc" button
            style = {
                {
                    overlay: {
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        width: '700px',
                        height: '700px',
                        margin: 'auto',
                        maxWidth: '100%', //for responsive mode
                        maxHeight: '100%', //for responsive mode
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        zIndex: '1010' //tried this for overlay fullscreen but didnt work - with width and height in 100% still doesnt work
                    },
                    content: {
                        color: '#000',
                        backgroundColor: 'none'
                    }
                }
            }
            >
            <div className="cards__item__pic-wrap__modal">
                <img alt="" src="https://images.unsplash.com/photo-1454692173233-f4f34c12adad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80" className="cards__item__img__modal"/>
            </div>     
                 <h3 className="cards__item__text__modal">A Simple Guide to Design Thinking</h3>
                 <p className="content__modal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'</p>
                 <div className="text__image__modal">
                 <img alt="" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" className="Avatar"></img>
                 <p className="text__modal">John Doe-Product Owner</p>
                 </div>
            <MdClose className="closeBtn" onClick={() => setModalIsOpen(false)} />
            </Modal>
            
        </>
    )
}


export default CardItem
