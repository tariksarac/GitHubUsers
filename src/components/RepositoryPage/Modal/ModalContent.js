import React from 'react';
import PropTypes from 'prop-types';
import './ModalContent.scss'
import Button from "../../Common/Button/Button";
import Input from "../../Common/Input/Input";
import TextArea from "../../Common/TextArea/TextArea";

const ModalContent = ({AddIssue, title, handleChange, body, closeModal}) => {
    return (
        <div className={'ModalContent'}>
            <h2>Create New Issue</h2>
            <form
                className={'modal-form'}
                onSubmit={e => {
                    e.preventDefault();
                    AddIssue();
                }}>
                <label>Title</label>
                <Input className={'field'} type={'text'} name={'title'} value={title} onChange={handleChange}/>
                <label>Body</label>
                <TextArea className={'field'} name={'body'} value={body} onChange={handleChange}/>
                <div>
                    <Button type={'submit'} buttonText={'CREATE ISSUE'} style={{margin: '50px 0'}}/>
                    <Button type={'button'} buttonText={'CANCEL'} style={{margin: '50px 20px', backgroundColor: 'gray', backgroundImage: 'none'}} onClick={closeModal}/>
                </div>
            </form>
        </div>
    );
};

ModalContent.propTypes = {
    AddIssue: PropTypes.func,
    handleChange: PropTypes.func,
    closeModal: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string
};
ModalContent.defaultProps = {};

export default ModalContent;
