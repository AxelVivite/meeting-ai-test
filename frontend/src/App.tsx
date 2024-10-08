import Title from "./components/atoms/typos/title";
import CreateBookForm from "./components/organisms/forms/createBookForm";

function App() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Title>Add a book</Title>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <CreateBookForm />
      </div>
   </div>
  )
}

export default App
