import React, { Component } from 'react';
import Dishes from '../../data/Dishes';
import MenuItem from './MenuItem';
import DishDetail from './DishDetail';
import { CardColumns, Button, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Menu extends Component {
  state = {
    dishes: Dishes,
    selectedDsih: null,
    modalOpen: false,
  };

  onSelectedDish = (dish) => {
    this.setState({
      selectedDsih: dish,
      modalOpen: !this.state.modalOpen,
    });
  };

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  };

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
          <CardColumns>{menu}</CardColumns>
          <Modal isOpen={this.state.modalOpen} onClick={this.toggleModal}>
            <ModalBody>{dishDetail}</ModalBody>
            <ModalFooter>
              <Button color='danger' onClick={this.toggleModal}>
                Close
              </Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Menu;
