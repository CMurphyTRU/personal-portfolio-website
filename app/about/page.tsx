import Section from "../components/Section"

export default function About()
{
    return (
        <div className="container mx-auto px-4">
            <Section>
                <div className="flex justify-center items-center font-bold pt-20">
                    About Me    
                </div>

                <div className="flex justify-center  text-gray-500 ">
                    My name is Christian Murphy, I am a computer science student in my third year
                </div>

                
            </Section>
        </div>
        
    )
}