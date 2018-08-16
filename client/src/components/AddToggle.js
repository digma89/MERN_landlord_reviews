import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class AddToggle extends Component {

    toggle = this.toggle.bind(this);
    state = { collapse: false };
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
    pcode: "Postal Code",
    comment: "Comment"
    } ; 
    
    state = {
        value: '1'
    };
    
    addProvinces = (i) => {
        return (<option key={i} value={i}>{i}</option>);
     }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.constants.addButton}</Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
                <Form>
                    <FormGroup>
                    <Label for="text"></Label>
                    <Input type="text" name="inputAddress1" id="inputAddress1" placeholder={this.constants.address1} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="text"></Label>
                    <Input type="text" name="inputAddress2" id="inputAddress2" placeholder={this.constants.address2} />
                    </FormGroup>
                    <FormGroup>
                    <Label for="select"></Label>
                    <Input type="select" name="selectPcode" id="selectPcode" value={this.state.value} onChange={(e)=>{this.setState({value: e.target.value})}}>
                    <option value='1' disabled>Select your province</option>
                        {this.constants.province.map (this.addProvinces)}
                    </Input>
                    </FormGroup>              
                    <FormGroup>
                    <Label for="text"></Label>
                    <Input type="text" name="inputPcode" id="inputPcode" placeholder={this.constants.pcode} />
                    </FormGroup> 
                    <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
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
