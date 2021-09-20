
import React from 'react';




class ProfileStatus extends React.Component  {
   
 

  state = {
    editMode:false,
    status: this.props.status
  }


  componentDidUpdate (prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
          this.setState ({
            status: this.props.status
          })
        }
  }

  activeEditMode = () => {
    this.setState (
      {
        editMode:true,
        status: this.props.status
      }
    )
  }

  deactiveEditMode = () => {
    this.setState (
      {
        editMode:false
      }
    )
    this.props.updateStatus(this.state.status)
  }


  onStatusChange = (e) => {
    
    this.setState({ status: e.target.value})
  }



  render() {
  return (
    <div>
      { !this.state.editMode &&
        <div>
           <span onDoubleClick = {this.activeEditMode}> {this.props.status || "No Status" } </span>
        </div>
        }
      { this.state.editMode &&
        <div> 
        <input onChange = {this.onStatusChange} value = {this.state.status} autoFocus = {true} onBlur = {this.deactiveEditMode}></input>
      </div>
      }
    </div>
  )
  }
}

export default ProfileStatus
