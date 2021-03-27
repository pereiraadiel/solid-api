## <h1 align='center'>SOLID API</h1>

## <h2 align='center'>Cadastro de usuário</h2>

## <hr/> <br/>

### <p style='color: #0d9; font-weight: bold;'>Endpoints</p>

- #### <p style='font-weight: bold;'>/api/user/register</p>
  ```bash
    # Esperado no corpo da requisição
    $name : string
    $email : string
    $password : string

    # Deverá ser retornado
    $status = 201
    $token : string

    # Possíveis erros
    =============== 1 ==============
      $status = 400
      $error: string = 'bad request' || 'unknow error'
    =============== 2 ==============
      $status = 500
      $error: string = 'internal server error'
  ```
