import React, { Component } from 'react';
import Dishes from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';

class Menu extends Component {
  state = {
    dishes: Dishes,
    selectedDsih: null,
  };

  onSelectedDish = (dish) => {
    this.setState({
      selectedDsih: dish,
    });
  };

  // ------------------------------------------------
  render() {
    const menu = this.state.dishes.map((item) => {
      return (
        <MenuItem
          key={item.id}
          dish={item}
          SelectedDish={() => this.onSelectedDish(item)}
        />
      );
    });

    let dishDetail = null;
    if (this.state.selectedDsih != null) {
      dishDetail = <DishDetail dish={this.state.selectedDsih} />;
    }

    return (
      <div className='container'>
        <div className='row'>
          <div className='col-6'>{menu}</div>
          <div className='col-6'>{dishDetail}</div>
        </div>
      </div>
    );
  }
}

export default Menu;
