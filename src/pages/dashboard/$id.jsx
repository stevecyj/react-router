import { useParams } from 'react-router-dom'

function DynamicDashboard() {
  const { id } = useParams()

  return <div>Dynamic Dashboard Page, Param: {id}</div>
  // eslint-disable-next-line no-console,no-unreachable
  console.log(id)
}

export default DynamicDashboard
