import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel,
} from '@tanstack/react-table'
import { useGetServersQuery } from '../api/apiSlice'
import { Server } from '../api/types'
import Layout from '@/components/layout/Layout'
import Spinner from '@/components/spinner/Spinner'
import styles from './ServersScree.module.scss'

const colHelper = createColumnHelper<Server>()

const columns = [
  colHelper.accessor('name', {
    header: () => 'Name',
    cell: (props) => props.getValue(),
    sortingFn: 'alphanumeric',
  }),
  colHelper.accessor('distance', {
    header: () => 'Distance',
    cell: (props) => props.getValue(),
    sortingFn: 'alphanumeric',
  }),
]

const ServersScreen = () => {
  const servers = useGetServersQuery()

  const table = useReactTable({
    data: servers.data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  })
  console.log(servers.isLoading)
  return (
    <>
      {servers.isLoading && <Spinner />}
      <Layout>
        {!servers.isLoading && (
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      <div className={styles.headerCell}>
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
                    <td key={cell.id} className={styles.tableCell}>
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
