import React from 'react';
import Modal from 'react-modal';
import NotebookIndexItem from './notebooks_index_item';
import { Link } from 'react-router-dom';

class Notebooks extends React.Component {
  constructor(props) {
    super(props);
    //
    this.customStyles = {
      content : {
        top: '0',
        left: '0',
        right: '65%',
        bottom: '0',
      }
    };
    this.closeModal = this.closeModal.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  // handleClick(id) {
  //   //
  //   return (e) => {
  //     this.setState({
  //       selectedNotebook: id
  //     });
  //   };
  // }

  componentDidMount() {
    this.props.fetchNotebooks();
  }

  componentWillMount() {
    this.setState({
      notebooks: this.props.fetchNotebooks(),
    });
  }

  render() {
    let notebooks = [];
    for(let notebook in this.props.notebooks){
      notebooks.push(this.props.notebooks[notebook]);
    }
    // is the above right? are they passed with a key?
    return (
      <div className='notebook-modal' >
        <Modal contentLabel="Modal"
               style={this.customStyles}
               isOpen={this.props.modalOpen}
               onRequestClose={this.props.closeModal}
               >
          <ul className='notebooks-list'>
            <li className='fixed-first-notebook'>
              <p>NOTEBOOKS</p>
              <Link to='/notebooks/new' className='add-notebook'>+</Link>
            </li>
            {notebooks.map ( (notebook) => <button
                                              key={notebook.id}>
                                              <NotebookIndexItem
                                                  closeModal={this.props.closeModal}
                                                  notebook={notebook}/>
                                           </button> )}
          </ul>
        </Modal>
      </div>
    );
  }
}

export default Notebooks;

// onClick={this.handleClick(notebook.id)}
// style={{overlay: {backgroundColor: 'white'}}}


// <View style={{
//     flex: 1,
//     flexDirection: 'column',
//     justifyContent: 'center',
//     alignItems: 'center'}}>
//     <View style={{
//         width: 300,
//         height: 300}}>


// </View>
// </View>
