import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  // sets everything back to initial state after each test
  fetch.resetMocks();
})

// describe is a jest method that contains one or more related tests.
describe('receives values from GitHub REST API using jest fetch mock', () => {
  test("receives GitHub name", async () => {
    fetch.mockResponseOnce(JSON.stringify({name: 'coder'}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', { level: 1 }))
    expect(gitHubName).toHaveTextContent('coder')
  })
  test("receives GitHub URL", async () => {
    fetch.mockResponseOnce(JSON.stringify({html_url: 'https://github.com/learningToCode1234'}))
    render(<App />)
    const gitHubURL = await waitFor(() => screen.getByText('Link to GitHub profile'))
    expect(gitHubURL).toHaveAttribute('href', 'https://github.com/learningToCode1234')
  })
})