"use client"

import { IconButton } from "@/componnents/iconbutton"
import { InputField, InputIcon, InputRoot } from "@/componnents/input"
import { Copy, Link } from "lucide-react"

interface InviteLinkInputProps {
	inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
	function copyInviteLink() {
		navigator.clipboard.writeText(inviteLink)
	}
	return (
		<InputRoot>
			<InputIcon>
				<Link className="size-5" />
			</InputIcon>
			<InputField readOnly defaultValue={inviteLink} />
			<IconButton onClick={copyInviteLink}>
				<Copy className="size-5" />
			</IconButton>
		</InputRoot>
	)
}
