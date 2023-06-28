'use client'
import { useState, useEffect } from 'react'
import Modal from '@/components/Modal'

interface ModalProviderProps {}

const ModalProvider: React.FC<ModalProviderProps> = ({}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	})

	if (!isMounted) return null
	return (
		<div>
			<Modal title="testModal" description="jidf" isOpen onChange={() => {}}>
				hhahahah
			</Modal>
		</div>
	)
}

export default ModalProvider
