import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4n4k5w68h3x01yra00r5rzf/master',
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYyOTA3NjYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNHcwcjZrbjIxa3EwMXVkOWh3YjFzY28vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDBhMGRhMmMtZWM4MC00MmZiLTk3YzQtYWVhY2YwZWRlOTk0IiwianRpIjoiY2w0b281YnlpMGhtbTAxeG4xNmJuNGlnMiJ9.zqtKbuUjhpvyvlFDrh7QKAcCKPZMYZ7sGDQhVkgdYGPI6Rd8FcEu4CVsoJHSk2TmCXOatiYj7vRqqRT-SVYBWQY344inu0HfPRnS93njQpSctUQVqo939HJyHDIHzBU0JEiVmWeDW4N7pewhTcqViP_DOo6qejSIzkzn3Mc5i7cVCV7tqhPgDZuZaLhM2-ylz1eIXpiz76c5TjLzCYfO19HO6rlKs4bEj7SXaQt0eSZMXG2eb37sgRTC1NLCLIoWDtVCgW3F99G0xwHPJ8T8Lr-R4Z04o54TAO5wKPem8qzu58wYvY8auoGyJAAJcvsrYI3I5EFhBrEAWHzi4ltB-1Exfhwkl7zJlHCQZ1HDc6to48LuAgpnZUvFqhW1WFOuMQsLbEC9iKvNHDKNEYGqJto1sw1-Ph7EH5U-ENdkoxrQbz9X1ybjZerDFg0dEhMJ8vK7NWKTLMiqNePQXxLTJY66xHyfOcS7O2I0qbSfaoN8P86Qq2iFz9cnQUK7l8wVxo7NCvZsFIC8Uciq2Tl8sIUtCf71a0oKGQ5MA1C_KS9sb5S2sfEhDk-gf68zZj6daS6cBRSmfD4xErWCBnAap0TjIP7YVo50mFMxflONcCCKVr2ElJwNw2X_6wB0UziiY4skgfl962_xILu9JeT1sp5wSEfbAfzXPwKrJhmVW10'
  },
  cache: new InMemoryCache(),
})
