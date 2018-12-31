import React from 'react';
import DefaultSearchForm from './SearchForm';
import DefaultQuestionForm from './QuestionForm';

import '../../../public/js/quickOptions';

const QuickOptions = () => (
  <div className="quick-options">

    <div className="quick-search option">
      <i className="fas fa-search" id="fa-search" />
      <DefaultSearchForm mobile={false} />
    </div>

    <div className="quick-question option">
      <h2>Post a question</h2>
      <i className="fas fa-pencil-alt" />
      <DefaultQuestionForm />
    </div>
  </div>
);

export default QuickOptions;
