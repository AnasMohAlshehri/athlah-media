export default function Home(){
	return (
		<main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
			<header className="w-full max-w-4xl flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold">Athlah Media</h1>
				<nav className="text-sm text-gray-600">
					<a href="#" className="ml-4">Home</a>
				</nav>
			</header>

			<section className="w-full max-w-4xl bg-white rounded-lg shadow p-8">
				<h2 className="text-3xl font-semibold mb-4">Welcome to Athlah Media</h2>
				<p className="text-gray-700">This is a starter homepage. Replace this section with your actual content or components.</p>
			</section>
		</main>
	);
}