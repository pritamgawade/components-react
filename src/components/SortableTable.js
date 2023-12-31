import Table from "./Table"
import useSort from '../hooks/use-sort';
import { GoArrowDown, GoArrowUp } from 'react-icons/go'

function SortableTable(props) {
    const { columns, data } = props;

    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, columns)

    const updatedColumn = columns.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(column.label)}>
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            )
        }
    });

    return <Table {...props} data={sortedData} columns={updatedColumn} />
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    }

    if (sortOrder === null) {
        return <div>
            <GoArrowUp />
            <GoArrowDown />
        </div>
    } else if (sortOrder === 'asc') {
        return <div>
            <GoArrowUp />
        </div>
    } else if (sortOrder === 'desc') {
        return <div>
            <GoArrowDown />
        </div>
    }
}

export default SortableTable