import React, { Component } from 'react';
import { getCategories } from '../services/api';

class Categories extends Component {
  state = { categories: [] };

  componentDidMount() {
    this.getCateg();
  }

  getCateg = async () => {
    const categories = await getCategories();
    this.setState({ categories });
    console.log(categories);
  };

  render() {
    const { categories } = this.state;
    return (
      <div>
        { categories.map((cat) => (
          <section data-testid="category" key={ cat.name }>
            <label htmlFor="radio">
              <input id="radio" type="radio" value={ cat.name } />
              { cat.name }
            </label>
          </section>
        ))}
        ;
      </div>
    );
  }
}

export default Categories;
