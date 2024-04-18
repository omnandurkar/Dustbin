export default () => {
    const stats = [
        {
            data: "35K",
            title: "Customers"
        },
        {
            data: "10K+",
            title: "Downloads"
        },
        {
            data: "40+",
            title: "Countries"
        },
        {
            data: "30M+",
            title: "Total revenue"
        },
    ];

    return (
        <section className="py-14" data-aos="fade-up">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Our customers are always happy
                    </h3>
                    <p className="mt-3">
                       Our Customers says about us ...
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
                        {stats.map((item, idx) => (
                            <li
                                key={idx}
                                className="text-center px-12 md:px-16"
                                data-aos="fade-down"
                                data-aos-delay={`${500 + idx * 300}`}
                            >
                                <h4 className="text-4xl text-green-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};
