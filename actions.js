"use client"
import { saveName } from "../lib/actions"
import { useActionState, useEffect } from "react"

export default function FormPage() {
    const [formState, formAction, isPending] = useActionState(saveName, false)

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])

    return (
        <form action={formAction}>
            <label>
                Navn
                <input className="bg-white text-black" type="text" name="name" />
            </label>
            <label>
                Email
                <input className="bg-white text-black" type="E-mail" name="email" />
            </label>
            <button type="submit" className="bg-pink-500 p-2 disabled:bg-gray-600" disabled={isPending}>{isPending ? "Saving..." : "Save name"}</button>
            {formState ? <p>Tak for din tilmelding</p> : null}
        </form>
    )
}