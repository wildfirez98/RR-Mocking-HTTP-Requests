import React, { useEffect, useState } from 'react'
import './App.css'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


function App() {
  const [gitHubName, setGitHubName] = useState('')     
  const [gitHubURL, setGitHubURL] = useState('')                    


  useEffect(() => {
      fetch('https://api.github.com/users/learningToCode1234')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.name)
        setGitHubURL(data.html_url)
      })
  }, [])

  return (
    <div className="App">
      <Row>
        <Col>Github Profile Info:</Col>
      </Row>

      <Row className="justify-content-center">
        <Col sm={3}>
          <h1>{gitHubName}</h1>
        </Col>
        <Col sm={3}>
          <button href={gitHubURL}>Link to GitHub profile</button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
