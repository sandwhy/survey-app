import React from 'react'
import { submitSurvey } from '../../actions'
import { useHistory } from "react-router-dom"

const SurveyFormReview = ({ onCancel, values }) => {
    const history = useHistory()
  return (
    <div>
        <h5>Please confirm your entries</h5>
        <div>
            <div>
                <label>Survey Title</label>
                <div>{values.title}</div>
            </div>
            <div>
                <label>Subject Line</label>
                <div>{values.subject}</div>
            </div>
            <div>
                <label>Email Body</label>
                <div>{values.body}</div>
            </div>
            <div>
                <label>Recipent List</label>
                <div>{values.emails}</div>
            </div>
        </div>
        <button className='yellow darken-3 white-text btn-flat' onClick={onCancel} >
            Back
        </button>
        <button className='green white-text btn-flat right' onClick={submitSurvey(values, history)} >
            Send Survey
            <i className='material-icons right'>email</i>
        </button>
    </div>
  )
}

export default SurveyFormReview