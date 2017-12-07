import React from 'react';

const url = (zipCode) => `api.openweathermap.org/data/2.5/weather?&zip=${zipCode}APPID=2a287c50b34b5600cbf0672914fad893`


class ZipCode extends React.Component {

  componentDidMount() {
    fetch( url(this.props.zip) )
    .then(data => data.json())
    .then(data => {
      this.setState({
        weatherData: data
      })
    })
  }
  render() {
    return (
      <div>
        <p>Give me a zipCode! I give you weather</p>
      </div>
    );
  }
}

export default ZipCode;