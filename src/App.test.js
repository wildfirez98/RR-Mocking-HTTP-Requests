import { render, screen, waitFor } from '@testing-library/react'
import App from './App'

beforeEach(async function () {
  fetch.resetMocks();
  // sets everything back to initial state after each test
  fetch.dontMock();
});

test("renders GitHub name from GitHub REST API using jest fetch mock", async () => {
  fetch.mockResponseOnce(
      JSON.stringify({login: 'nkleinmann'})
  )
  render(<App />)
  const gitHubName = await waitFor(() => screen.getByTestId('gitHubName'))
  expect(gitHubName).toHaveTextContent('nkleinmann')
})