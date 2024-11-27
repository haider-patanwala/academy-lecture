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
			<Dialog
				open={isOpen}
				onOpenChange={() => setIsOpen(!isOpen)}>
				<DialogContent className='max-w-fit'>
					<Tabs
						defaultValue='login'
						className='w-fit'>
						<TabsList className='grid w-full grid-cols-2'>
							<TabsTrigger value='login'>Login</TabsTrigger>
							<TabsTrigger value='signup'>Signup</TabsTrigger>
						</TabsList>
						<TabsContent value='login'>
							<form onSubmit={handleLogin}>
								<div className=' z-[9999] bg-white gap-20 flexCol w-[40rem]'>
									<Input
										type='text'
										name='email'
										value={form.email}
										onChange={(e) =>
											setForm((previous) => ({
												...previous,
												email: e.target.value,
											}))
										}
										className='border'
										placeholder='Please Enter your Email Id '
									/>
									<Input
										type='password'
										name='password'
										className='border'
										placeholder='Please Enter your password'
										value={form.password}
										onChange={(e) => {
											setForm((prev) => ({
												...prev,
												password: e.target.value,
											}));
										}}
									/>
									<Button
										className='border px-4 py-2'
										onClick={() => {}}>
										Submit
									</Button>
								</div>
							</form>
						</TabsContent>
						<TabsContent value='signup'>
							<form onSubmit={handleSignup}>
								<div className=' z-[9999] bg-white gap-20 flexCol w-[40rem]'>
									<Input
										type='text'
										name='email'
										value={form.email}
										onChange={(e) =>
											setForm((previous) => ({
												...previous,
												email: e.target.value,
											}))
										}
										className='border'
										placeholder='Please Enter your Email Id '
									/>
									<Input
										type='password'
										name='password'
										className='border'
										placeholder='Please Enter your password'
										value={form.password}
										onChange={(e) => {
											setForm((prev) => ({
												...prev,
												password: e.target.value,
											}));
										}}
									/>
									<Button
										className='border px-4 py-2'
										onClick={() => {}}>
										Submit
									</Button>
								</div>
							</form>
						</TabsContent>
					</Tabs>
				</DialogContent>
			</Dialog>
		</>
	);
}

export default Signup;
