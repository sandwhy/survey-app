import React from 'react'
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form'

import {checkEmpty, emailValidation} from '../../utils/validateEmails'
import surveyField from './SurveyField'

let SurveyForm = (props) => {
  const { handleSubmit } = props

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <Field key='Survey Title' component={surveyField} type="text" label='Survey Title' name='title' validate={checkEmpty} />
        <Field key='Subject Line' component={surveyField} type="text" label='Subject Line' name='subject' validate={checkEmpty} />
        <Field key='Email Body' component={surveyField} type="text" label='Email Body' name='body' validate={checkEmpty} />
        <Field key='Recipient List' component={surveyField} type="text" label='Recipient List' name='emails' validate={[checkEmpty, emailValidation]} />
            <Link to='/surveys' className='red btn-flat white-text'>
              Cancel
            </Link>
            <button className='teal btn-flat right white-text' type='submit'>
              Submit <i className='material-icons right'>done</i>
            </button>
        </form>
    </div>
  )
}

SurveyForm = reduxForm({
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)

export default SurveyForm