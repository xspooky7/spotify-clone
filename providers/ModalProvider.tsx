'use client'
import { useState, useEffect } from 'react'
import Modal from '@/components/Modal'
import AuthModal from '@/components/AuthModal'

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	})

	if (!isMounted) return null
	return (
		<div>
			<AuthModal />
		</div>
	)
}

export default ModalProvider
