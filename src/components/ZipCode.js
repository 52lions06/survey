import React from 'react';

const urlWeb = (zipCode) => `http://api.openweathermap.org/data/2.5/weather?&zip=${zipCode}&APPID=2a287c50b34b5600cbf0672914fad893`


class ZipCode extends React.Component {

  componentDidMount() {
    fetch( urlWeb(this.props.zip) )
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
        {this.props.children}
      </div>
    );
  }
}

export default ZipCode;