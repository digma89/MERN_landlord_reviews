import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Input} from 'reactstrap';
import {connect} from 'react-redux';
import {addComment} from '../actions/commentAcctions';
import PropTypes from 'prop-types';

class AddToggle extends Component {
 
    constructor(props){
        super(props);
        this.state = {
            collapse: false, 
            province: '1',
            formIsValid: false,
            inputClass: ""
        }


    }
    
    toggle = this.toggle.bind(this);
  
    constants = {
        addButton: "Add review",
        address1: "Address 1",
        address2: "Address 2",  
        province: [      
        "AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC", "SK","YT"
        ],
        pCode: "Postal Code",
        comment: "How's your landlord doing?"
    } ; 
    
    
    onChangeAddress1 = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangeAddress2 = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangeProvince = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangePCode = (e)=>{
        this.setState({[e.target.name]: e.target.value})
        this.checkPostal(e.target.value)
    };
    onChangeComment = (e)=>{this.setState({[e.target.name]: e.target.value})};

    addProvinces = (i) => {
        return (<option key={i} value={i}>{i}</option>);
     }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  addReview = (e) => {
    e.preventDefault();
    this.toggle();

    const newReview = {
        address1: this.state.address1,
        address2: this.state.address2,
        province: this.state.province,
        pCode: this.state.pCode,
        comment: this.state.comment
    }
    //send to redux store
    console.log(newReview);
    this.props.addComment(newReview);
    
  }   

 checkPostal = (postal) => {     
    const regex = new RegExp (/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/);
    if (regex.test(postal)){
        this.setState({formIsValid: true})        
        this.setState({inputClass:""})
    }else{        
        this.setState({inputClass:"is-invalid"})
        this.setState({formIsValid: false})
    }        
}

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.constants.addButton}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <Form onSubmit={this.addReview.bind(this)}>
                    <FormGroup>
                        <Input type="text" name="address1" id="inputAddress1" placeholder={this.constants.address1} onChange={this.onChangeAddress1} required/>
                    </FormGroup>
                    <FormGroup>            
                        <Input type="text" name="address2" id="inputAddress2" placeholder={this.constants.address2} onChange={this.onChangeAddress2} />
                    </FormGroup>
                    <FormGroup>
                        <Input type="select" name="province" id="selectPcode" value={this.state.province} onChange={this.onChangeProvince} required>
                            <option value='1' disabled>Select your province</option>
                            {this.constants.province.map (this.addProvinces)}
                        </Input>
                    </FormGroup>
                    <FormGroup>                    
                        <Input type="text" name="pCode" id="inputPcode" className={this.state.inputClass} placeholder={this.constants.pCode} onChange={this.onChangePCode} required/>
                    </FormGroup> 
                    <FormGroup>
                        <Input type="textarea" name="comment" id="exampleText" placeholder={this.constants.comment} onChange={this.onChangeComment} required/>
                    </FormGroup>                    
                    <Button disabled={!this.state.formIsValid}>Submit</Button>
                </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

AddToggle.propTypes = {
    comment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    comment: state.comment    
});

export default connect(mapStateToProps, { addComment})(AddToggle);
