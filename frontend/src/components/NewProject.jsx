import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Swal from 'sweetalert2';
import axios from 'axios';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const NewProject = () => {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({
        title: "",
        description: "",
        method: "",
        category: ""
      })

    const handleClickOpen = () => {
        setOpen(true);
        console.log("open")
      };

      const handleClose = () => {
        setOpen(false);
        console.log("close")
  
      };
      
      const sub = async(e) => {
        e.preventDefault()
        try {
         axios.post("http://localhost:3001/api/actionPlans/createActionPlans", data);
          Swal.fire({
            icon: "success",
            title: "Recipe Added Successfully",
            timer:1500,
            
          });
    
          setData({ 
            title: "",
            description: "",
            method: "",
            category: ""
        });
        
      
         
           
           handleClose()
           //
    
        //    gett()
           console.log("subb")
      }catch (error) {
        Swal.fire('Error', 'Failed to submit data.', 'error');
      }
      
        
    }

  return (
    <>
    <div>
        <button className=' btn btn-primary' onClick={handleClickOpen}>
        Add Project
      </button>
    </div>
    
    <div>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Add Your Project"}</DialogTitle>
        <DialogContent>
        <form className="row g-3 needs-validation" onSubmit={sub}>
        <div className="form-floating">
                      <input type="text" name='title' id="title" className="form-control" required
                      value={data.title}
                        placeholder="title" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} />
              <label htmlFor="title">Title</label>

                    </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='description' value={data.description} id="description" placeholder="name@example.com"
            onChange={(e) => 
              setData({...data, [e.target.name]: e.target.value})} />
              
              <label htmlFor="description">Description</label>

          </div>
          <div className="form-floating">
          <select className="form-select" name='category' value={data.category} aria-label="Floating label select example" onChange={(e) => 
                        setData({...data, [e.target.name]: e.target.value})} >
            <option selected value="">Open this select menu</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Maxician">Maxician</option>
          </select>
          <label htmlFor="floatingSelectGrid">Category</label>
          </div>
          <div className="invalid-feedback">
            Please provide a valid city.
          </div>

          {/* <label htmlFor="photo">Upload Photo</label> */}
          {/* <input type="file" id='photo' name='photo' accept='image/jped, image/jpg, image/png' onChange={handleFileChange} required /> */}
          <div>
          <button type='submit' className='btn btn-primary mx-2'>Submit</button>
          <button onClick={handleClose}>Cancle</button>
          </div>
         
          </form>
        </DialogContent>
       
      </Dialog>
    </div>
    </>
  )
}

export default NewProject