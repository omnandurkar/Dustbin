import { useRef, useState } from "react"

const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div 
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList.q}
                {
                    state ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                    )
                }
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? {height: answerH } : {height: '0px'}}
            >
                <div>
                    <p className="text-green-600">
                        {faqsList.a}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default () => {

    const faqsList = [
        {
            q: "What is Multi Function Dustbin?",
            a: " A Multi-Function Dustbin typically refers to a waste bin or trash can that serves multiple purposes or has additional features beyond just being a container for waste disposal ."
        },
        {
            q: "How does Multi Function Dustbin work?",
            a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator."
        },
        {
            q: "How can we order from Scanned Waste?",
            a: "The functionality of a multi-function dustbin depends on its specific features and design."
        },
        {
            q: "How can we use wet waste for crop?",
            a: "Using wet waste for crop cultivation is a sustainable practice that promotes recycling, reduces waste, and enriches soil fertility."
        },
        {
            q: "How it Segregates Wet & Dry Waste?",
            a: "Segregating wet and dry waste is essential for effective waste management and recycling efforts. "
        }
    ]
  
    return (
        <div className="relative  pt-6"  style={{
            background: "linear-gradient(152.92deg, rgba(132, 252, 192, 0.2) 4.54%, rgba(121, 249, 232, 0.17) 34.2%, rgba(132, 252, 192, 0.1) 77.55%)",
        }}>
            
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 z-20">
            <div className="space-y-3 text-center">
                <h1 className="text-3xl text-gray-800 font-semibold">
                    Frequently Asked Questions
                </h1>
                <p className="text-gray-600 max-w-lg mx-auto text-lg">
                    Answered all frequently asked questions, Still confused? feel free to contact us.
                </p>
            </div>
            <div className="mt-14 max-w-2xl mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <div data-aos="fade-down"
                        data-aos-delay={`${500 + idx * 300}`}>
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                            
                        />
                        </div>
                    ))
                }
            </div>
        </section>

       
        </div>
    )
}