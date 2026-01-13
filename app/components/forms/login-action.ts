"use server"

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginAction(prevState, formData) {
	const values = Object.fromEntries(formData);

	if (
		values.username === "admin"
		&& values.password === "jensen"
	) {
		const cookieStore = await cookies();
		cookieStore.set("access_token", "1234", { maxAge: 30 * 60 })
		return redirect("/pokemon");
	}

	return {
		success: false,
		data: values,
		error: "Forkert brugernavn eller adgangskode"
	};
}