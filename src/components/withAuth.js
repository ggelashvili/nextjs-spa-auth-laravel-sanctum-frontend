import React from 'react'
import {isLoggedIn} from '@/util/auth'
import redirectTo from '@/util/redirectTo'

export default function withAuth(Component) {
    const AuthComponent = (props) => {
        return <Component {...props} />
    }

    AuthComponent.getInitialProps = (context) => {
        const isUserLoggedIn = isLoggedIn(context?.req?.headers?.cookie || '')

        if (! isUserLoggedIn) {
            redirectTo('/login', context)
        }

        return {user: {isLoggedIn: isUserLoggedIn}}
    }

    return AuthComponent
}
