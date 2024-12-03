import React, { useContext, useState } from "react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from "./ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { isLoggedIn, signupformOpen } from "@/utils/store";

function Signup({}) {
	const { isOpen, setIsOpen } = useContext(signupformOpen);

	const { loggedIn, setIsLoggedIn } = isLoggedIn();

	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(
			JSON.stringify({
				email: form.email,
				password: form.password,
			})
		);
		return fetch("http://localhost:3001/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: form.email,
				password: form.password,
			}),
		})
			.then((res) => {
				if (res.ok) {
					setIsLoggedIn(true);
					setIsOpen(false);
				}
			})
			.then((res) => {
				console.log(res);
			});
	}
	function handleSignup(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(
			JSON.stringify({
				email: form.email,
				password: form.password,
			})
		);
		return fetch("http://localhost:3001/user", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: form.email,
				password: form.password,
			}),
		})
			.then((res) => {
				if (res.ok) {
					setIsLoggedIn(true);
					setIsOpen(false);
				}
			})
			.then((res) => {
				console.log(res);
			});
	}

	// console.log(form);
	return (
		<>
			{!isOpen ? (
				<button onClick={() => setIsOpen((previous) => !previous)}>
					Login
				</button>
			) : (
				<form
					className={`fixed ${
						isOpen ? "visible" : "hidden"
					} h-screen w-screen flexCenter relative z-[9999] transition-all duration-500 bg-gray-950/20`}
					onSubmit={handleSubmit}>
					<button
						className='w-full bg-transparent z-10 h-full absolute inset-0'
						onClick={() => {
							setIsOpen(false);
						}}
					/>
					<div className='border z-[9999] bg-white gap-20 p-10 flexCol w-[40rem]'>
						<input
							type='text'
							name='email'
							value={form.email}
							onChange={(e) =>
								setForm((previous) => ({
									...previous,
									email: e.target.value,
								}))
							}
						/>
						<input
							type='password'
							name='password'
							value={form.password}
							onChange={(e) => {
								setForm((prev) => ({
									...prev,
									password: e.target.value,
								}));
							}}
						/>
						<button
							className='border px-4 py-2'
							onClick={() => {}}>
							Submit
						</button>
					</div>
				</form>
			)}
		</>
	);
}

export default Signup;
