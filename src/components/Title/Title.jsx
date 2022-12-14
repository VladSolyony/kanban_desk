import React, { useContext, useState } from 'react';
import './Title.scss';
import Contexts from '../../utils/Contexts';
import src from '../../img/del.svg';

function Title({ title, listId }) {
    const [open, setOpen] = useState(false);
    const [listTitle, setListTitle] = useState(title);
    const {updateListTitle, removeList} = useContext(Contexts)

    const handleOnChange = (e) => {
        setListTitle(e.target.value);
    }

    const handleOnBlur = () => {
        updateListTitle(listTitle, listId);
        setOpen(false);
    }

    return ( 
        <div>
            {open? (
            <div className='title'>
                <input 
                    value={listTitle} 
                    className='title__input'
                    autoFocus
                    onChange={handleOnChange}
                    onBlur = {handleOnBlur}
                    
                />
            </div>
            ) : (
            <div className='changing-title'>
                <h1
                    className='changing-title__text'
                    onClick={() => setOpen(!open)}
                >
                    {listTitle}
                </h1>
                <div className="changing-title__icon" >
                    <img src={src} alt="" onClick={() => removeList(listId)}/>
                    {/* <MoreHorizIcon /> */}
                </div>
            </div>
            )}
        </div>
     );
}


export default Title;