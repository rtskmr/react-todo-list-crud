import React from 'react';
import { connect } from 'react-redux';
import styles from './editModalPage.css';
import { Button, Header, Modal, Image } from 'semantic-ui-react'
import closeIconImage from '../../assets/closeIcon.png';

class EditModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      isEditModalOpen: true,
    };
    this.closeModal = this.closeModal.bind(this);

  }
  //closeModal = () => this.setState({ isEditModalOpen: false })
  closeModal() {
    debugger;
    this.setState({isEditModalOpen: false});
  }
  render() {
    return (
      <div>
        <Modal open={this.props.isEditModalOpen} closeModal={this.closeModal}>
          <Modal.Header>Edit Rows</Modal.Header>
          <Image
            src={closeIconImage}
            onClick={this.closeModal}
            circular
            size='tiny' />
          <Modal.Content>
            <input type="text" name="name" />
            <Button className={styles.editListBtn}>SAVE</Button>
          </Modal.Content>
        </Modal>
      </div>);
  }
}
const mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, null)(EditModalPage);
