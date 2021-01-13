const { createUser } = require("./fn")

jest.mock('./fn')
createUser.mockReturnValue({name : 'Mike'})

test('유저를 만든다.', () => {
  const user = createUser()
  expect(user.name).toBe('Mike')
})