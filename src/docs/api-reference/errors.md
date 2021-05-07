# Http errors

| Http response code  | Reason                                                       |
| ------------------- | ------------------------------------------------------------ |
| 400 Invalid data    | The request did not pass correctly formatted JSON            |
| 401 Unauthenticated | Invalid or missing API key                                   |
| 403 Forbidden       | Your api key is invalid or the x-api-key header is missing   |
| 422 Invalid schema  | The JSON could not be parsed with valid structure and values |
| 500 Server error    | Unknown server error :(                                      |
