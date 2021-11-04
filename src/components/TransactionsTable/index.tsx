import { useEffect } from 'react'
import { api } from 'services/api'
import { Container } from './styles'

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
    .then((data) => console.log(data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Website</td>
            <td className="deposit">R$12.000,00</td>
            <td>Programação</td>
            <td>03/11/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">-R$300,00</td>
            <td>Casa</td>
            <td>03/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}
