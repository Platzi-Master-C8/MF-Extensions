import React, { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { Typography } from '@mui/material'

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

export default function CustomizedSnackbars({
	message,
	type,
	status,
	resetOpen,
}) {
	const [open, setOpen] = useState(status)

	useEffect(() => {
		setOpen(status)
	}, [status])

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return
		}
		resetOpen(false)
		setOpen(false)
	}

	return (
		<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
			<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
				<Typography>{message}</Typography>
			</Alert>
		</Snackbar>
	)
}
