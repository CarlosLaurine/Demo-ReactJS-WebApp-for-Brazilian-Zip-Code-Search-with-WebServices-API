import './style.css';

import ResultCard from 'components/ResultCard';

const CEPSearch = () => {
  const changeHandler = (change: React.ChangeEvent<HTMLInputElement>) => {
    console.log(
      'Changed to => ' + change.target.value 
    );
  };

  const submissionHandler = (submission: React.FormEvent<HTMLFormElement>) => {
    submission.preventDefault();
    console.log('The Submission Button was Clicked');
  };

  return (
    <div className="zip-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="search-container container">
        <form onSubmit={submissionHandler}>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (Brazilian ZIP Code - Numbers Only)"
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
