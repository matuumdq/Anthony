import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "sonner";

const Contact = () => {
	const form = useRef();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [messages, setMessages] = useState("");
	const sendEmail = (e) => {
		e.preventDefault();

		if (name === "" || email === "" || messages === "") {
			toast.error("Todos los campos son obligatorios");
			return;
		}

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE,
				import.meta.env.VITE_TEMPLATE,
				form.current,
				import.meta.env.VITE_USER_API
			)
			.then(
				() => {
					toast.success("Email enviado satisfactoriamente");
					e.target.reset();
					setName("");
					setEmail("");
					setMessages("");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="px-12" id="form">
			<h2 className="text-2xl text-center pt-8 uppercase font-extralight text-white">
				Contactame
			</h2>
			<form ref={form} className="py-10" onSubmit={sendEmail}>
				<div className="">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-screen-lg items-center justify-center mx-auto border-black border p-2 sm:p-4 md:p-8 rounded shadow-xl bg-black/40">
						<div className="relative my-2 mx-5 group">
							<input
								type="text"
								onChange={(e) => setName(e.target.value)}
								name="floating_name"
								id="floating_name"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-500/60 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_name"
								className="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Ingrese su nombre
							</label>
						</div>

						<div className="relative my-2 mx-5 group">
							<input
								type="text"
								onChange={(e) => setEmail(e.target.value)}
								name="floating_email"
								id="floating_email"
								className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-green-500/60 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_email"
								className="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Ingrese su Email
							</label>
						</div>

						<div className="relative my-2 mx-5 group md:col-span-2">
							<input
								type="text"
								onChange={(e) => setMessages(e.target.value)}
								name="floating_message"
								id="floating_message"
								className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-green-500/60 appearance-none focus:outline-none focus:ring-0 focus:border-slate-300 peer"
								placeholder=" "
							/>
							<label
								htmlFor="floating_message"
								className="peer-focus:font-medium absolute text-sm text-gray-200 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
							>
								Escriba su Consulta
							</label>
						</div>
						<div className="justify-self-center items-center md:col-span-2 mb-4">
							<button
								className="font-light bg-green-700 shadow-xl mx-auto ml-0 px-12 py-2 rounded-md hover:scale-105 ease-in duration-300 text-white "
								type="submit"
							>
								Enviar
							</button>
						</div>
					</div>
				</div>
			</form>
			<Toaster richColors />
		</div>
	);
};

export default Contact;
