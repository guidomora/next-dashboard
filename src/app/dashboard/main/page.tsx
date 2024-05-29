import { SimpleWidget } from "@/components"


const MainPage = () => {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">General information</span>
      <div className="flex flex-wrap p-2 justify-center items-center">
        <SimpleWidget />
      </div>
    </div>
  )
}

export default MainPage