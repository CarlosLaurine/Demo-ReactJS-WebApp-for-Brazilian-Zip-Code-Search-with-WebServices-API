import './style.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

type FormData = {
  zip: string;
  test: string;
};

const CEPSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    zip: '',
    test: '',
  });

  const changeHandler = (change: React.ChangeEvent<HTMLInputElement>) => {
    const name = change.target.name;
    const value = change.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const submissionHandler = (submission: React.FormEvent<HTMLFormElement>) => {
    submission.preventDefault();
    console.log(formData);
  };

  return (
    <div className="zip-search-container">
      <h1 className="text-primary">CEP Search</h1>
      <div className="search-container container">
        <form onSubmit={submissionHandler}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (Brazilian ZIP Code - Numbers Only)"
              name="zip"
              value={formData.zip}
              onChange={changeHandler}
            />
            <input
              type="text"
              className="search-input"
              placeholder="CEP Test"
              name="test"
              value={formData.test}
              onChange={changeHandler}
            />
            <button type="submit" className="search-button btn btn-primary">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Neighborhood" description="Copacabana" />
        <ResultCard title="Number" description="1024" />
      </div>
    </div>
  );
};

export default CEPSearch;
