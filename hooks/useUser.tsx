import { User } from '@supabase/auth-helpers-nextjs'
import { Subscription, UserDetails } from '@/types'
import { useState, useEffect, useContext, createContext } from 'react'
import {
	useSessionContext,
	useUser as useSupaUser,
} from '@supabase/auth-helpers-react'

type UserContextType = {
	accessToken: string | null
	user: User | null
	userDetails: UserDetails | null
	isLoading: boolean
	subscription: Subscription | null
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export interface Props {
	[propname: string]: any
}

export const MyUserContextProvider = (props: Props) => {
	const {
		session,
		isLoading: isLoadingUser,
		supabaseClient: supabase,
	} = useSessionContext()
	const user = useSupaUser()
	const accessToken = session?.access_token ?? null
	const [isLoadingData, setIsLoadingData] = useState(false)
	const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
	const [subscription, setSubscription] = useState<Subscription | null>(null)

	const getUserDetails = () => supabase.from('users').select('*').single()
	const getSubscription = () =>
		supabase
			.from('subscriptions')
			.select('*, prices(*, products(*))')
			.in('status', ['trialing', 'active'])
			.single()

	useEffect(() => {
		if (user && !isLoadingData && !userDetails && !subscription) {
			setIsLoadingData(true)

			Promise.allSettled([getUserDetails(), getSubscription()]).then(res => {
				const [userDetailsPromise, subscriptionPromise] = res
				if (userDetailsPromise.status === 'fulfilled') {
					setUserDetails(userDetailsPromise.value.data as UserDetails)
				}

				if (subscriptionPromise.status === 'fulfilled') {
					setSubscription(subscriptionPromise.value.data as Subscription)
				}
				setIsLoadingData(false)
			})
		} else if (!user && !isLoadingUser && !isLoadingData) {
			setUserDetails(null)
			setSubscription(null)
		}
	}, [user, isLoadingUser])

	const values = {
		accessToken,
		user,
		userDetails,
		isLoading: isLoadingUser || isLoadingData,
		subscription,
	}

	return <UserContext.Provider value={values} {...props} />
}

export const useUser = () => {
	const context = useContext(UserContext)
	if (context === undefined) {
		throw new Error(
			'useUser can only be used inside the corresponding Provider'
		)
	}
	return context
}
