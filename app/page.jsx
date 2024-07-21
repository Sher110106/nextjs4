import Feed from "@components/Feed"
const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head-text text-center">
                Discover & Share
                <br className={'max-md:hidden'}/>
                <span className={"orange_gradient text-center"}> Ai powered prompts</span>
            </h1>
            <p className={"desc text-center"}>
                njkf  kdw k vkknkev knkevvoe eknvkev
            </p>
            <Feed/>

        </section>
    );
};

export default Home;