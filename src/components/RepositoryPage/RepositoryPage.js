import React from 'react';
import PropTypes from 'prop-types';
import FileItem from "./FileItem/FileItem";
import Modal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

const files = []

class RepositoryPage extends React.Component {
    static defaultProps = {};

    static propTypes = {};

    state = {
        modalIsOpen: false
    };

    openModal = () =>{
        this.setState({modalIsOpen: true});
    }

    afterOpenModal = () =>{
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal = () => {
        this.setState({modalIsOpen: false});
    }


    render() {
        return (
            <div>
                <div className={'repo-heading'}>
                    <div className={'repo-title-name'}></div>
                    <div className={'repo-title-stars'}></div>
                </div>
                <div className={'repo-title'}>
                    <div>Open Issues</div>
                    <button>Create Issue</button>
                </div>
                {files.map((item, index) => <FileItem  file={item} key={index}/>)}
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    ariaHideApp={false}
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={this.closeModal}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form>
                </Modal>
            </div>
        );
    }
}

export default RepositoryPage;

