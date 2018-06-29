import React from 'react'

export default class FhirObservation extends React.Component {

  render () {
    return (
      <div className='tile'>
        <h2 className='primarycolor' style={{display: 'inline-block'}}>
          Observation : {this.props.resource.code.text}
        </h2>
        &nbsp;&nbsp;&nbsp;
        <h3 style={{display: 'inline-block'}}>Performed in : {this.props.resource.category.text}</h3>
        <table>
          <tbody>
             { this.props.resource.subject.reference ? (
             <tr>
                <td><strong>Subject : </strong></td>
                <td>{this.props.resource.subject.reference}</td>
              </tr>) : '' }
             { this.props.resource.status ? (
              <tr>
                <td><strong>Status : </strong></td>
                <td>{this.props.resource.status}</td>
              </tr>) : ''}
             { this.props.resource.effectiveDateTime ? (
              <tr>
                <td><strong>Efective Date : </strong></td>
                <td>{this.props.resource.effectiveDateTime.slice(0,10)}</td>
              </tr>) : ''}
             { this.props.resource.referenceRange[0].text ? (
              <tr>
                <td><strong>Range : </strong></td>
                <td>{this.props.resource.referenceRange[0].text}</td>
              </tr>) : ''}
          </tbody>
        </table>

      </div>
    )
  }
}