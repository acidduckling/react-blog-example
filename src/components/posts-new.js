import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
  renderField(field) {
    const { label, name, input } = field;
    const { touched, invalid, error } = field.meta;
    const invalidClass = touched && invalid ? 'has-danger' : '';

    return (
      <div className={`form-group ${invalidClass}`}>
        <label htmlFor={name}>{label}</label>
        <input type="text" id={name} className="form-control" {...input} />
        <div className="text-help">{touched && invalid ? error : ''}</div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.createPost(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field name="title" label="Title for Post" component={this.renderField} />
          <Field name="categories" label="Categories" component={this.renderField} />
          <Field name="content" label="Post Content" component={this.renderField} />
          <div className="btn-toolbar">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-danger">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // Validate inputs from 'values'
  if (!values.title) errors.title = 'Enter a title';
  if (!values.categories) errors.categories = 'Enter some categories';
  if (!values.content) errors.content = 'Enter some content';

  // If errors is empty the form is fine to submit
  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  validate
})(
  connect(
    null,
    { createPost }
  )(PostsNew)
);
