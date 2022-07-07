import React, {useState} from 'react'
import { reduxForm } from 'redux-form'
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview'

function SurveyNew() {
  const [showFormReview, setShowFormReview] = useState(false)
  const [formValues, setFormValues] = useState({})
  
  const submit = (values) =>{
    setFormValues(values)
    setShowFormReview(true)
  }

  const onCancel = () => {
    setShowFormReview(false)
  }

  let content = () => {
    if (showFormReview) {
      return <SurveyFormReview onCancel={onCancel} values={formValues} />
    }
    return <SurveyForm onSubmit={submit} />
  }

  return (
    <div>
      {content()}
    </div>
  )
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew)