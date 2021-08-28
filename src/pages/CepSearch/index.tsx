import './style.css';

import ResultCard from 'components/ResultCard';

const CEPSearch = () => {
  return (
    <div className="zip-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="search-container container">
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (Brazilian ZIP Code - Numbers Only)"
              onChange={() => {}}
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
