"use client"

import { useActionState } from "react"
import LoginAction from "./login-action"

export default function LoginForm() {
	const [formState, formAction, isPending] = useActionState(LoginAction, {});

	return (
		<form action={formAction}>
			<div>
				<label>
					<span>Brugernavn</span>
					<input type="text" name="username" />
				</label>
			</div>
			<div>
				<label>
					<span>Adgangskode</span>
					<input type="password" name="password" />
				</label>
			</div>
			<button type="submit">Log ind</button>
			{!formState.success && <p>{formState.error}</p>}
		</form>
	)
}