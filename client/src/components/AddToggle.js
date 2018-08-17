import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddToggle extends Component {
    
    toggle = this.toggle.bind(this);
    state = { 
        collapse: false, 
        province: '1'};

    constants = {
        addButton: "Add review",
        address1: "Address 1",
        address2: "Address 2",
        province1: [{
            "name": "Alberta",
            "abbreviation": "AB"
        },
        {
            "name": "British Columbia",
            "abbreviation": "BC"
        },
        {
            "name": "Manitoba",
            "abbreviation": "MB"
        },
        {
            "name": "New Brunswick",
            "abbreviation": "NB"
        },
        {
            "name": "Newfoundland and Labrador",
            "abbreviation": "NL"
        },
        {
            "name": "Northwest Territories",
            "abbreviation": "NT"
        },
        {
            "name": "Nova Scotia",
            "abbreviation": "NS"
        },
        {
            "name": "Nunavut",
            "abbreviation": "NU"
        },
        {
            "name": "Ontario",
            "abbreviation": "ON"
        },
        {
            "name": "Prince Edward Island",
            "abbreviation": "PE"
        },
        {
            "name": "Quebec",
            "abbreviation": "QC"
        },
        {
            "name": "Saskatchewan",
            "abbreviation": "SK"
        },
        {
            "name": "Yukon Territory",
            "abbreviation": "YT"
        }
    ],
    province: [      
       "AB","BC","MB","NB","NL","NT","NS","NU","ON","PE","QC", "SK","YT"
    ],
    pCode: "Postal Code",
    comment: "How's your landlord doing?"
    } ; 
    
    
    onChangeAddress1 = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangeAddress2 = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangeProvince = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangePCode = (e)=>{this.setState({[e.target.name]: e.target.value})};
    onChangeComment = (e)=>{this.setState({[e.target.name]: e.target.value})};

    addProvinces = (i) => {
        return (<option key={i} value={i}>{i}</option>);
     }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  addReview = (e) => {
    e.preventDefault();
    console.log(this);
    
  } 

  

 checkPostal = (postal) => {
    const regex = new RegExp (/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]( )?\d[ABCEGHJKLMNPRSTVWXYZ]\d$/i);
    if (regex.test(postal.value))
        return true;
    else return false;
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
                        <Input type="text" name="pCode" id="inputPcode" placeholder={this.constants.pCode} onChange={this.onChangePCode} required/>
                    </FormGroup> 
                    <FormGroup>
                        <Input type="textarea" name="comment" id="exampleText" placeholder={this.constants.comment} onChange={this.onChangeComment} required/>
                    </FormGroup>                    
                    <Button>Submit</Button>
                </Form>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default AddToggle;
