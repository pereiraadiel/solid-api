## <h1 align='center'>SOLID API</h1>

## <h2 align='center'>Cadastro de usuário</h2>

<br/>

### <p style='color: #0d9; font-weight: bold;'>Endpoints</p>

- #### <p style='font-weight: bold;'>/api/users</p>
  ```bash
    # Esperado no corpo da requisição
    $name : string
    $email : string
    $password : string

    # Deverá ser retornado
    $status = 201

    # Possíveis erros
    $status = 400
    $error: string
  ```
