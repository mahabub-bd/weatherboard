import { Header } from "./components";


export default function Page(){
    return (
        <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
           <Header/>
        </div>
    );
}