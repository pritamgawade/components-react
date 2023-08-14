import { Fragment } from 'react';

function Table({ data, columns, keyFn }) {
    const renderedHeaders = columns.map((column) => {
        if (column.header) {
            return <Fragment key={column.label} >{column.header()}</Fragment>
        }
        return <th key={column.label}>{column.label}</th>
    })

    const renderedRows = data.map((rowData) => {
        const renderedCells = columns.map((column) => {
            return (
                <td className="p-2" key={column.label}>
                    {column.render(rowData)}
                </td>
            );
        });

        return (
            <tr className="border-b" key={keyFn(rowData)}>
                {renderedCells}
            </tr>
        );
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    );
}

export default Table;