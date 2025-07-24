import CreateRoom from "../components/createRoom.tsx"

const Home: React.FC = () => {
    return (
        <div className="h-[100vh] flex item-center justify-center">
            <CreateRoom />
        </div>
    )
}

export default Home;