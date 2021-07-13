import React, { useEffect, useState } from 'react'
import './App.css'
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"


function App() {
  const [gitHubName, setGitHubName] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      fetch('https://api.github.com/users/nkleinmann')
      .then(res => res.json())
      .then(data => {
        setGitHubName(data.login)
        setIsLoading(false)
      })
  })

  if (isLoading) {
    return <>Loading... </>
  }

  return (
    <div className="App">
      <Row>
        <Col>Github Profile Info:</Col>
      </Row>
     {/* <h2>{gitHubName}</h2> */}
      <Row>
        <Col data-testid="gitHubName">{gitHubName}</Col>
      </Row>
    </div>
  );
}

export default App;
