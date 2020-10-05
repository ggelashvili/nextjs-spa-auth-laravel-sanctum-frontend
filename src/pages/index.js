import React, {useEffect, useState} from 'react'
import Layout from '@components/layout'
import Table, {TableCell, TableRow} from '@components/table'
import api from '@/util/api'
import {isLoggedIn} from '@/util/auth'
import redirectTo from '@/util/redirectTo'
import withAuth from '@components/withAuth'

const Home = ({user}) => {
    const [tickets, setTickets] = useState([])
    const truncate              = text => text.substr(0, 40) + (text.length > 40 ? '...' : '')
    const prioritySvg           = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 29.107 29.107"
             className="text-red-400 w-4 h-4">
            <path
                d="M14.554,0C6.561,0,0,6.562,0,14.552c0,7.996,6.561,14.555,14.554,14.555c7.996,0,14.553-6.559,14.553-14.555 C29.106,6.562,22.55,0,14.554,0z"
            />
        </svg>
    )

    useEffect(() => {
        api().get('/api/tickets').then(response => setTickets(response.data))

        console.log(user)
    }, [])

    return (
        <Layout>
            <Table>
                <thead>
                    <TableRow>
                        <TableCell isHeader={true}>Ticket #</TableCell>
                        <TableCell isHeader={true}>Subject</TableCell>
                        <TableCell isHeader={true}>User</TableCell>
                        <TableCell isHeader={true}>Agent</TableCell>
                        <TableCell isHeader={true}>Created At</TableCell>
                        <TableCell isHeader={true}>Priority</TableCell>
                    </TableRow>
                </thead>
                <tbody>
                    {
                        tickets.map((ticket, i) => (
                            <TableRow key={ticket.id} isEven={(i + 1) % 2 === 0}>
                                <TableCell>{ticket.id}</TableCell>
                                <TableCell>{truncate(ticket.subject)}</TableCell>
                                <TableCell>{ticket.user.name}</TableCell>
                                <TableCell>{ticket.agent.name}</TableCell>
                                <TableCell>{ticket.createdAt}</TableCell>
                                <TableCell>
                                    <span className="flex">
                                        {[...Array(ticket.priority + 1)].map((x, i) => (
                                            <span key={i}>{prioritySvg()}</span>
                                        ))}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </tbody>
            </Table>
        </Layout>
    )
}

export default withAuth(Home)
