"use client"
import z from "zod"
import { saveName } from "../lib/actions"
import { useActionState, useEffect, useState } from "react"

export default function FormPage() {
    const initialState = {
        data: {
            name: "",
            email: ""
        },
        success: false
    }
    const [formState, formAction, isPending] = useActionState(saveName, initialState)

    useEffect(function () {
        console.log("formState", formState)
    }, [formState])

    return (
        <form action={formAction} noValidate>
            <label>
                Navn
                <input className={`bg-white text-black ${formState.error?.properties?.name && "border border-red-500"}`} type="text" name="name" defaultValue={formState.data.name} />
                {formState.success ? null : <p>{formState.error?.properties?.name?.errors}</p>}
            </label>
            <label>
                Email
                <input className="bg-white text-black" type="email" name="email" defaultValue={formState.data.email} />
                {formState.success ? null : <p>{formState.error?.properties?.email?.errors}</p>}
            </label>
            <button type="submit" className="bg-pink-500 p-2 disabled:bg-gray-600" disabled={isPending}>{isPending ? "Saving..." : "Save name"}</button>
            {formState.success ? <p>Tak for din tilmelding</p> : null}
        </form>
    )
}