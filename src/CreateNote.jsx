import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';


const CreateNote = (props) => {
   const[expand, setExpand] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    // useState ke paas jo bhi data hai(title and content) usko setNote access kr skta h
   // prevData daalne se setNote me ...useState ka previous data jo tha wo ajaega ... phle se hi jo data h useState me use hum access kr skte hai..setNote me argument pass krne se
    const InputEvent=(event)=>{
        // user input and text field me kya likh rha h..yaha se pata chlega..aise bhi likh skte the
        // const value = event.target.value;
        // const name = event.target.name;
        // object destructuring  
        const{name, value} = event.target;
        setNote((prevData)=>{
            return{
                // jitne bhi previous notes honge..wo ...prevData me ajayenge
                ...prevData, 
                // name attribute ki actual valu dhoondega..or yaha paste kr dega..or hume wo value mmil jayegi
                [name]: value,
            }
        });
    };


    const addEvent = (event)=>{
      props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    }


    const expandIt = ()=>{
        setExpand(true);
    }

    return (
        <>
            <div className='main_note'>
                <form>
                {expand?
                    <input
                        type="text" 
                        name="title" 
                        value={note.title}
                        onChange={InputEvent}
                        placeholder="Title"
                        autoComplete='off'
                         /> 
                         : null}

                    <textarea
                        rows=""
                        name="content"
                        value={note.content} 
                        onChange={InputEvent}
                        column=""
                        autoComplete="off"
                        placeholder="Write a note.."
                        onClick={expandIt}>
                    </textarea>
                      
                      {expand?
                    <Button onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>: null}
                </form>
            </div>
            </>
    );
};

export default CreateNote;