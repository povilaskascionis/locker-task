import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table'
import { useGetServersQuery } from '../api/apiSlice'
import { Server } from '../api/types'
import Layout from '@/components/layout/Layout'
import Spinner from '@/components/spinner/Spinner'

const colHelper = createColumnHelper<Server>()

const columns = [
  colHelper.accessor('name', {
    header: () => 'Name',
    cell: (props) => props.getValue(),
  }),
  colHelper.accessor('distance', {
    header: () => 'Distance',
    cell: (props) => props.getValue(),
  }),
]

const ServersScreen = () => {
  const servers = useGetServersQuery()

  const table = useReactTable({
    data: servers.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  console.log(servers.isLoading)
  return (
    <>
      {servers.isLoading && <Spinner />}
      <Layout>
        {!servers.isLoading && (
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Layout>
    </>
  )
}

export default ServersScreen
