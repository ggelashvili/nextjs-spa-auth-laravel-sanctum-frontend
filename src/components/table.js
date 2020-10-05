import React from 'react'

export const TableRow = ({children, isEven, className}) => (
    <tr className={`${isEven ? 'bg-gray-50' : 'bg-white'} ${className || ''}`}>
        {children}
    </tr>
)

export const TableCell = ({children, isHeader, className}) => {
    if (isHeader) {
        return (
            <th className={`px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider ${className || ''}`}>
                {children}
            </th>
        )
    }

    return (
        <td className={`px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900 ${className || ''}`}>
            {children}
        </td>
    )
}

const Table = ({children}) => {
    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            {children}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table
